document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle language and store preference
    function toggleLanguage() {
        var btn = document.getElementById('language-btn');
        var isEnglish = btn.classList.contains('active');
        
        // Determine the current language and switch accordingly
        if (isEnglish) {
            // Switch to Greek
            localStorage.setItem('language', 'GR');
            switchLanguageToGreek();
        } else {
            // Switch to English
            localStorage.setItem('language', 'EN');
            switchLanguageToEnglish();
        }
    }

    // Function to switch language to English
    function switchLanguageToEnglish() {
        var currentPath = window.location.pathname;
        var newPath;
        if (currentPath.includes('_gr')) {
            newPath = currentPath.replace('_gr', '');
        } else {
            newPath = currentPath;
        }
        window.location.href = newPath;
    }

    // Function to switch language to Greek
    function switchLanguageToGreek() {
        var currentPath = window.location.pathname;
        var newPath;
        if (currentPath.includes('.html')) {
            newPath = currentPath.replace('.html', '_gr.html');
        } else {
            newPath = currentPath + '_gr.html';
        }
        window.location.href = newPath;
    }

    // Function to initialize language toggle based on saved preference
    function initializeLanguageToggle() {
        var savedLanguage = localStorage.getItem('language');
        var btn = document.getElementById('language-btn');
        var langEn = document.getElementById('lang-en');
        var langGr = document.getElementById('lang-gr');

        // Set initial language based on saved preference or default to English
        var isEnglish = savedLanguage === 'EN' || !savedLanguage; // Default to English if no preference is saved

        // Update UI based on initial language
        btn.classList.toggle('active', isEnglish);
        langEn.classList.toggle('active-lang', isEnglish);
        langGr.classList.toggle('active-lang', !isEnglish);

        // Update content of text elements based on the saved language
        var elements = document.querySelectorAll('[data-gr]');
        elements.forEach(function(el) {
            var enText = el.getAttribute('data-en') || el.textContent.trim();
            var grText = el.getAttribute('data-gr').trim();
            el.textContent = isEnglish ? enText : grText; // Update text content based on the saved language
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
