const homeScreen = require("../screens/form.screen");

describe('Validar o menu Forms', () =>{
    it('Acessar o menu Forms', async () => {
        await $('~Forms').click()
        expect(await $('~text-input')).toBeDisplayed()

    });

    it('Escrever nos campos do Formulário', async () =>{
         await $('~text-input').setValue('Preenchendo os campos')
         await $('~Dropdown').click()
         const selector = 'new UiSelector().text("Appium is awesome").className("android.widget.CheckedTextView")'
         const button = await $(`android=${selector}`)
    });

})


