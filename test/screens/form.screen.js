class HomeScreen {
    get enterFormLogin(){
        return $('id:button_next')
    }

    async goToNextPage(){
        this.enterFormLogin.click()
    }
}
module.exports = new HomeScreen()