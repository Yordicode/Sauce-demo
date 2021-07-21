import { Selector, t } from "testcafe"
import { LoginPage } from "./loginPage"

const loginPage = new LoginPage()


export class Logout {
    constructor() {
        this.burgerIcon = Selector("#react-burger-menu-btn")
        this.burgerNav = Selector("#menu_button_container > div > div.bm-menu-wrap > div.bm-menu > nav")
        this.logoutLink = Selector("#logout_sidebar_link")        
    }

    async logout() {
        await t
            .click(this.burgerIcon)
            .expect(this.burgerNav.exists).ok()
            .click(this.logoutLink)
            .expect(loginPage.loginPageWrapper.exists).ok()
    }
}