import { Then, When } from "@wdio/cucumber-framework";
import cartPage from "../pageobjects/cart.page.js"
import { WAIT_TIMEOUT } from "../helpers/Constants.js";

When(/^User should be select sort option on cart Page$/, async () => {
    await cartPage.sortButton.waitForDisplayed({timeout: WAIT_TIMEOUT});
    await expect(cartPage.sortButton).toBeDisplayed();
    await cartPage.sortButton.click();
    await cartPage.sortDessendingOption.waitForDisplayed({timeout: WAIT_TIMEOUT});
    await expect(cartPage.sortDessendingOption).toBeDisplayed();
    await cartPage.sortDessendingOption.click();
});

Then(/^user sould be see cart item in sorted form$/, async () =>{
  const isCartSOrted = await cartPage.collectPrice();
  await expect(isCartSOrted).toEqual(true);
});