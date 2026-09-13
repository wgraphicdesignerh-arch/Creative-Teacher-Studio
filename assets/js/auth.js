// Complete Device-Bound License Verification System with Google Sheets Sync

// REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL (DEPLOYED AS ANYONE HAS ACCESS)
const GOOGLE_SHEETS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxuPUYgtCgNXYwAdmtjGFaf-IV8uD8B2pFnE5xngm7RW_XzGCCqTH2mHw5PBT6XazyRew/exec";

// Master Local License Database (Pre-authorized users fallbacks)
const MASTER_USERS_LOCAL_DB = [
    { email: "admin@hassa.com", pass: "hassa123", boundId: null },
    { email: "wgraphicdesignerh@gmail.com", pass: "wgraphicdesignerh@gmail.com", boundId: null },
    { email: "teacher@hesah.com", pass: "123456", boundId: null }
];

// Get Unique Device Digital Fingerprint ID
function getDeviceFingerprint() {
    let deviceId = localStorage.getItem('hesah_device_hwid');
    if (!deviceId) {
        const platform = navigator.platform || 'Platform';
        const userAgent = navigator.userAgent || 'UA';
        const screenRes = `${window.screen.width}x${window.screen.height}x${window.screen.colorDepth}`;
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'TZ';
        const randSeed = Math.random().toString(36).substring(2, 9);
        
        // Generate pseudo unique hash string
        const str = `${platform}_${userAgent}_${screenRes}_${timeZone}_${randSeed}`;
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }
        deviceId = 'HWID-' + Math.abs(hash).toString(16).toUpperCase() + '-' + Math.random().toString(36).substring(2, 7).toUpperCase();
        localStorage.setItem('hesah_device_hwid', deviceId);
    }
    return deviceId;
}

// Fetch Public Client IP Address
async function getClientIP() {
    try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        return data.ip || 'Local/Protected IP';
    } catch (e) {
        return 'Local/Static IP';
    }
}

// Check session on page load
document.addEventListener('DOMContentLoaded', () => {
    const session = getAuthSession();
    if (!session) {
        showLoginModal(true);
    } else {
        verifySessionDevice(session);
    }
    injectLogoutButton();
});

function injectLogoutButton() {
    const langSelect = document.getElementById('languageSelector');
    const headerContainer = langSelect ? langSelect.parentElement : document.querySelector('header .max-w-7xl');
    
    if (headerContainer && !document.getElementById('authLogoutBtn')) {
        const session = getAuthSession();
        if (session) {
            const logoutContainer = document.createElement('div');
            logoutContainer.id = 'authLogoutBtnContainer';
            logoutContainer.className = 'flex items-center gap-2 nav-3d-btn px-3 py-1.5 rounded-xl border border-purple-500/30 bg-slate-900/90 shadow-lg';
            logoutContainer.innerHTML = `
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-xs font-extrabold text-slate-200 max-w-[120px] truncate" title="${session.email}">${session.email}</span>
                <button onclick="logoutUser()" id="authLogoutBtn" class="mr-1 text-rose-400 hover:text-rose-300 transition cursor-pointer text-xs font-extrabold flex items-center gap-1" data-i18n-title="logoutBtn">
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span class="hidden sm:inline" data-i18n="logoutBtn">خروج</span>
                </button>
            `;
            if (langSelect) {
                langSelect.parentElement.insertBefore(logoutContainer, langSelect);
            } else {
                headerContainer.appendChild(logoutContainer);
            }
            if (typeof applyLanguage === 'function' && typeof currentLang !== 'undefined') {
                applyLanguage(currentLang);
            }
        }
    }
}

function logoutUser() {
    const lang = localStorage.getItem('glowLanguage') || 'ar';
    const msg = lang === 'en' ? 'Do you want to sign out?' : (lang === 'fr' ? 'Voulez-vous vous déconnecter ?' : 'هل ترغبين في تسجيل الخروج من الحساب؟');
    if (confirm(msg)) {
        clearAuthSession();
        location.reload();
    }
}

function getAuthSession() {
    try {
        const dataStr = localStorage.getItem('hesah_auth_session');
        if (!dataStr) return null;
        return JSON.parse(dataStr);
    } catch (e) {
        return null;
    }
}

function setAuthSession(email, deviceId, ip) {
    const session = {
        email: email.toLowerCase().trim(),
        deviceId: deviceId,
        ip: ip,
        loginTime: new Date().toISOString()
    };
    localStorage.setItem('hesah_auth_session', JSON.stringify(session));
}

function clearAuthSession() {
    localStorage.removeItem('hesah_auth_session');
    showLoginModal(true);
}

// Render Security Login Modal
function showLoginModal(forceLock = true) {
    let modal = document.getElementById('authSecurityModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'authSecurityModal';
        modal.className = 'fixed inset-0 z-[99999] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 transition-all duration-300';
        modal.innerHTML = `
            <div class="bg-slate-900 border border-purple-500/30 w-full max-w-md p-8 rounded-3xl shadow-2xl relative overflow-hidden animate-fade-in text-right">
                <div class="absolute -top-12 -right-12 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl"></div>
                <div class="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>

                <div class="text-center mb-6 relative z-10">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white text-2xl mx-auto mb-3 shadow-lg shadow-pink-500/30">
                        <i class="fa-solid fa-user-lock"></i>
                    </div>
                    <h2 class="text-2xl font-black text-white mb-1">تسجيل الدخول للمنصة 🔒</h2>
                    <p class="text-xs text-slate-400 font-bold">المنصة محمية ومربوطة بجهاز واحد لكل اشتراك مع تتبع شيت اكسل</p>
                </div>

                <form id="authLoginForm" onsubmit="handleSecurityLogin(event)" class="space-y-4 relative z-10">
                    <div>
                        <label class="block text-xs font-bold text-slate-300 mb-1.5">البريد الإلكتروني المعتمد</label>
                        <div class="relative">
                            <input type="email" id="authEmail" required placeholder="teacher@hesah.com" class="w-full bg-slate-950 border border-slate-800 rounded-2xl p-3.5 pr-10 text-xs text-white focus:outline-none focus:border-pink-500 transition">
                            <i class="fa-solid fa-envelope absolute right-3.5 top-4 text-slate-500 text-xs"></i>
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-300 mb-1.5">كلمة المرور الخاصة بكِ</label>
                        <div class="relative">
                            <input type="password" id="authPassword" required placeholder="••••••••" class="w-full bg-slate-950 border border-slate-800 rounded-2xl p-3.5 pr-10 text-xs text-white focus:outline-none focus:border-pink-500 transition">
                            <i class="fa-solid fa-key absolute right-3.5 top-4 text-slate-500 text-xs"></i>
                        </div>
                    </div>

                    <div id="authAlert" class="hidden p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-bold text-center"></div>

                    <button type="button" onclick="quickDemoAuthLogin()" class="w-full py-3 rounded-2xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-black text-xs flex items-center justify-center gap-2 cursor-pointer border border-purple-500/40 transition mb-2">
      <i class="fa-solid fa-wand-magic-sparkles"></i>
      <span>تجربة سريعة (دخول تجريبي فوري) 🌟</span>
  </button>
  <button type="submit" id="authSubmitBtn" class="btn-purple-glow w-full py-4 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl">
                        <span>التحقق والدخول للمنصة 🚀</span>
                    </button>
                </form>

                <div class="mt-6 pt-4 border-t border-slate-800 text-center relative z-10">
                    <span class="text-[11px] text-slate-500 font-bold block">معرّف جهازك الرقمي (HWID):</span>
                    <code id="hwidDisplay" class="text-[10px] text-amber-400/90 font-mono tracking-wider">...Checking</code>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById('hwidDisplay').innerText = getDeviceFingerprint();
    } else {
        modal.classList.remove('hidden');
    }
}

// Perform Login Action
async function handleSecurityLogin(e) {
    e.preventDefault();
    const btn = document.getElementById('authSubmitBtn');
    const alertBox = document.getElementById('authAlert');
    const email = document.getElementById('authEmail').value.trim().toLowerCase();
    const pass = document.getElementById('authPassword').value.trim();

    alertBox.classList.add('hidden');
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> جاري التحقق والربط...`;

    const deviceId = getDeviceFingerprint();
    const ip = await getClientIP();

    // 1. Try Apps Script Excel Cloud Sync first
    if (GOOGLE_SHEETS_SCRIPT_URL && !GOOGLE_SHEETS_SCRIPT_URL.includes("YOUR_SCRIPT_ID_HERE")) {
        try {
            const response = await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({
                    action: 'login',
                    email: email,
                    pass: pass,
                    deviceId: deviceId,
                    ip: ip
                })
            });

            const result = await response.json();

            if (result.status === 'success') {
                setAuthSession(email, deviceId, ip);
                hideLoginModal();
                injectLogoutButton();
                if (window.PlaySound) window.PlaySound.playSuccess();
                if (window.showToast) window.showToast("تم تسجيل الدخول وتوثيق الجهاز بنجاح! 🌸");
                return;
            } else {
                showAuthError(result.message || "البيانات غير صحيحة أو تم تفعيل الحساب على جهاز آخر!");
                btn.disabled = false;
                btn.innerHTML = `<span>التحقق والدخول للمنصة 🚀</span>`;
                return;
            }
        } catch (err) {
            console.warn("Sheet endpoint sync failed, falling back to local registry validation.", err);
        }
    }

    // 2. Local Fallback Verification logic if Sheet URL is not updated yet
    const localUser = MASTER_USERS_LOCAL_DB.find(u => u.email === email && u.pass === pass);
    if (localUser) {
        const boundKey = `hesah_bound_device_${email}`;
        const storedBoundId = localStorage.getItem(boundKey);

        if (!storedBoundId) {
            // First time login -> Bind to current device & IP
            localStorage.setItem(boundKey, deviceId);
            setAuthSession(email, deviceId, ip);
            hideLoginModal();
            injectLogoutButton();
            if (window.PlaySound) window.PlaySound.playSuccess();
            if (window.showToast) window.showToast("تم تفعيل اشتراككِ وربطه بجهازكِ بنجاح! 🌸");
        } else if (storedBoundId === deviceId) {
            // Valid matching device
            setAuthSession(email, deviceId, ip);
            hideLoginModal();
            injectLogoutButton();
            if (window.PlaySound) window.PlaySound.playSuccess();
            if (window.showToast) window.showToast("أهلاً بكِ مجدداً أستاذتنا الفاضلة 💖");
        } else {
            // Device Mismatch Lock Error
            showAuthError("⚠️ الحساب مفعل ومربوط بجهاز آخر مسبقاً! لا يمكن استخدامه إلا على الجهاز المعتمد.");
        }
    } else {
        showAuthError("❌ البريد الإلكتروني أو كلمة المرور غير صحيحة!");
    }

    btn.disabled = false;
    btn.innerHTML = `<span>التحقق والدخول للمنصة 🚀</span>`;
}

function showAuthError(msg) {
    const alertBox = document.getElementById('authAlert');
    alertBox.innerText = msg;
    alertBox.classList.remove('hidden');
}

function hideLoginModal() {
    const modal = document.getElementById('authSecurityModal');
    if (modal) modal.classList.add('hidden');
}

function verifySessionDevice(session) {
    const currentDeviceId = getDeviceFingerprint();
    if (session.deviceId !== currentDeviceId) {
        clearAuthSession();
    }
}

window.quickDemoAuthLogin = function() {
    const emailField = document.getElementById('authEmail');
    const passField = document.getElementById('authPassword');
    if (emailField && passField) {
        emailField.value = 'admin@hassa.com';
        passField.value = 'hassa123';
        const form = document.getElementById('authLoginForm');
        if (form) {
            handleSecurityLogin(new Event('submit'));
        }
    }
};
