function toggleLanguage() {
    var btn = document.getElementById('language-btn');
    var langEn = document.getElementById('lang-en');
    var langGr = document.getElementById('lang-gr');
    var elements = document.querySelectorAll('[data-gr]');
    var isEnglish = btn.classList.contains('active');

    if (isEnglish) {
        // Switch to Greek
        btn.classList.remove('active');
        langEn.classList.remove('active-lang');
        langGr.classList.add('active-lang');
        elements.forEach(function(el) {
            var enText = el.textContent.trim();
            var grText = el.getAttribute('data-gr').trim();
            el.setAttribute('data-en', enText); // Store the English version
            el.textContent = grText; // Update to Greek
        });
        localStorage.setItem('language', 'GR'); // Save the language selection
    } else {
        // Switch to English
        btn.classList.add('active');
        langEn.classList.add('active-lang');
        langGr.classList.remove('active-lang');
        elements.forEach(function(el) {
            var enText = el.getAttribute('data-en') || el.textContent.trim();
            el.textContent = enText; // Retrieve the English version
        });
        localStorage.setItem('language', 'EN'); // Save the language selection
    }

    // Add fade-out class to trigger transition effect
    elements.forEach(function(el) {
        el.classList.add('fade-out');
    });

    // Refresh the page after changing the language (optional)
    window.location.reload();
}



function initializeLanguageToggle() {
    var savedLanguage = localStorage.getItem('language');
    console.log("Saved language:", savedLanguage);

    var btn = document.getElementById('language-btn');
    var langEn = document.getElementById('lang-en');
    var langGr = document.getElementById('lang-gr');

    // Set the initial language based on the saved preference
    var isEnglish = savedLanguage === 'EN'; // Check if the saved language is English
    console.log("Is English:", isEnglish);

    btn.classList.toggle('active', isEnglish);
    langEn.classList.toggle('active-lang', isEnglish);
    langGr.classList.toggle('active-lang', !isEnglish);

    // Update the text elements to the saved language
    var elements = document.querySelectorAll('[data-gr]');
    elements.forEach(function(el) {
        var enText = el.getAttribute('data-en') || el.textContent.trim();
        var grText = el.getAttribute('data-gr').trim();
        el.textContent = isEnglish ? enText : grText; // Update text content based on the saved language
    });
}
document.addEventListener('DOMContentLoaded', initializeLanguageToggle);
