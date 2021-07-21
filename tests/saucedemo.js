require("dotenv").config();

import { LoginPage, UserNavigation, Logout } from "../pages";

const loginPage = new LoginPage();
const userNavigation = new UserNavigation();
const logout = new Logout();

// prettier-ignore
fixture `Sauce Demo Testing`
    .page `https://www.saucedemo.com/`

test("Simple E2E", async () => {
  await loginPage.loginToApp(process.env.USERNAME, process.env.PASSWORD);
  await userNavigation.addItemToCartFromItemDetails();
  await userNavigation.reviewingCart();
  await userNavigation.completingInformation(
    process.env.FIRSTNAME,
    process.env.LASTNAME,
    process.env.ZIPPOSTAL
  );
  await userNavigation.checkoutOverview();
  await userNavigation.thankYouForYourOrder();
  await logout.logout();
});
