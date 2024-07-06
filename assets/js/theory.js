function scrollToUnit(unitId) {
    const element = document.getElementById(unitId);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}
