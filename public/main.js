const utils = new Utils(),
    el = {}

document.querySelectorAll('[id]').forEach(element => {
    el[utils.getCamelcase(element.id)] = element
})

// choose language
el.elLanguage.addEventListener('click', () => {
    el.elChooseLanguage.toggleClass('active')
})

el.elLanguageOptionEnglish.on('click', () => {
    utils.setCookie('jaum-language', 'english', 7)
})

el.elLanguageOptionPtbr.on('click', () => {
    utils.setCookie('jaum-language', 'ptbr', 7)
})

// click out side
utils.clickOutSide(el.elLanguage, () => {
    if(el.elChooseLanguage.hasClass('active'))
        el.elChooseLanguage.toggleClass('active')
})