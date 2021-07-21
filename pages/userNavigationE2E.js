import { Selector, t } from "testcafe"

export class UserNavigation {
    constructor() {        
        this.itemPrice = "$49.99"
        this.item = Selector("#item_5_title_link > div")
        this.itemPriceFromItemDetails = Selector("#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_price")
        this.addToCartFromItemDetails = Selector("#add-to-cart-sauce-labs-fleece-jacket")
        this.cartItemFromItemDetails = Selector("#shopping_cart_container > a > span")
        this.cartFromItemDetails = Selector("#shopping_cart_container > a")
        this.cartPage = Selector("#cart_contents_container")
        this.cartPageItemPrice = Selector("#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div")
        this.cartPageCheckoutButton = Selector("#checkout")
        this.checkoutInfoFiels = Selector("#checkout_info_container > div > form > div.checkout_info")
        this.firstnameInput = Selector("#first-name")
        this.lastnameInput = Selector("#last-name")
        this.zipPostalInput = Selector("#postal-code")
        this.continueButton = Selector("#continue")
        this.checkoutSummaryContainer = Selector("#checkout_summary_container")
        this.finalItemPrice = Selector("#checkout_summary_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div")
        this.checkoutFinishButton = Selector("#finish")
        this.thankYouForYourOrder = Selector("#checkout_complete_container")
    }
    
    async addItemToCartFromItemDetails() {
        await t
            .click(this.item)
            .expect(this.itemPriceFromItemDetails.innerText).eql(this.itemPrice)
            .click(this.addToCartFromItemDetails)
            .click(this.cartFromItemDetails)
    }   

    async reviewingCart() {
        await t
            .expect(this.cartPage.exists).ok()
            .expect(this.cartPageItemPrice.innerText).eql(this.itemPrice)
            .click(this.cartPageCheckoutButton)
    }

    async completingInformation(firstName, lastName, zipPostal) {        
        await t
            .expect(this.checkoutInfoFiels.exists).ok()
            .typeText(this.firstnameInput, firstName)
            .typeText(this.lastnameInput, lastName)
            .typeText(this.zipPostalInput, zipPostal)
            .click(this.continueButton)
    }

    async checkoutOverview() {
        await t
            .expect(this.checkoutSummaryContainer.exists).ok()
            .expect(this.finalItemPrice.innerText).eql(this.itemPrice)
            .click(this.checkoutFinishButton)        
    }

    async orderCompleted() {
        await t.expect(this.thankYouForYourOrder.exists).ok()
    }
}