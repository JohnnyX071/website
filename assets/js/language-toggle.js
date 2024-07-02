document.addEventListener('DOMContentLoaded', function() {
    // Function to get the base path of the website
    function getBasePath() {
        var path = window.location.pathname;
        if (path.includes('/website/')) {
            return '/website/';
        }
        return '/';
    }

    // Function to toggle language and store preference
    function toggleLanguage() {
        var btn = document.getElementById('language-btn');
        var isEnglish = btn.classList.contains('active');
        
        if (isEnglish) {
            localStorage.setItem('language', 'GR');
            switchLanguageToGreek();
        } else {
            localStorage.setItem('language', 'EN');
            switchLanguageToEnglish();
        }
    }

    // Function to switch language to English
    function switchLanguageToEnglish() {
        var currentPath = window.location.pathname;
        var basePath = getBasePath();
        var newPath;

        if (currentPath === basePath || currentPath === basePath + 'index_gr.html') {
            newPath = basePath;
        } else if (currentPath.includes('_gr.html')) {
            newPath = currentPath.replace('_gr.html', '.html');
        } else {
            newPath = currentPath;
        }
        window.location.href = newPath;
    }

    // Function to switch language to Greek
    function switchLanguageToGreek() {
        var currentPath = window.location.pathname;
        var basePath = getBasePath();
        var newPath;

        if (currentPath === basePath || currentPath === basePath + 'index.html') {
            newPath = basePath + 'index_gr.html';
        } else if (currentPath.endsWith('.html') && !currentPath.endsWith('_gr.html')) {
            newPath = currentPath.replace('.html', '_gr.html');
        } else {
            newPath = currentPath;
        }
        window.location.href = newPath;
    }

    // Function to initialize language toggle based on saved preference
    function initializeLanguageToggle() {
        var savedLanguage = localStorage.getItem('language');
        var btn = document.getElementById('language-btn');
        var langEn = document.getElementById('lang-en');
        var langGr = document.getElementById('lang-gr');

        var isEnglish = savedLanguage === 'EN' || !savedLanguage;

        btn.classList.toggle('active', isEnglish);
        langEn.classList.toggle('active-lang', isEnglish);
        langGr.classList.toggle('active-lang', !isEnglish);

        var elements = document.querySelectorAll('[data-gr]');
        elements.forEach(function(el) {
            var enText = el.getAttribute('data-en') || el.textContent.trim();
            var grText = el.getAttribute('data-gr').trim();
            el.textContent = isEnglish ? enText : grText;
        });
    }

    // Event listener for the language toggle button
    var languageBtn = document.getElementById('language-btn');
    if (languageBtn) {
        languageBtn.addEventListener('click', toggleLanguage);
    }

    // Initialize language toggle on page load
    initializeLanguageToggle();
});
