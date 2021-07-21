import { Selector, t } from "testcafe"

export class LoginPage {
    constructor() {
        this.loginPageWrapper = Selector("#root > div > div.login_wrapper")
        this.usernameInput = Selector("#user-name")
        this.passwordInput = Selector("#password")
        this.signInButton = Selector("#login-button") 
        this.inventoryList = Selector("#inventory_container")       
    }

    async loginToApp(username, password) {
        await t
            .expect(this.loginPageWrapper.exists).ok()
            .typeText(this.usernameInput, username)
            .typeText(this.passwordInput, password)
            .click(this.signInButton)
            .expect(this.inventoryList.exists).ok()
    }
}
