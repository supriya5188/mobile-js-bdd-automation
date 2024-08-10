import { expect } from '@wdio/globals';
import { Given, When, Then } from '@wdio/cucumber-framework';
import menuPage from '../pageobjects/menu.page.js';
import loginPage from '../pageobjects/login.page.js';
import loginMessagePage from '../pageobjects/loginMessage.page.js';
import { WAIT_TIMEOUT } from '../helpers/Constants.js';

Given(/^User should be Navigate to the Login Page$/, async () => {
    const isMenuTabClicked = await menuPage.handleMenuTab();
    await expect(isMenuTabClicked).toEqual(true);
    const isLoginMenuOptionClicked = await menuPage.handleLoginMenuOption();
    await expect(isLoginMenuOptionClicked).toEqual(true);
});

When(/^User should be login with (.*) and (.*)$/, async (userId, password) => {
    const isUserLoggedIn = await loginPage.handleLoginWithCredentials(userId, password);
    await expect(isUserLoggedIn).toEqual(true);
 });

 Then(/^Expected replay should be (.*)$/, async(expectedReplay) => {

	if (await loginMessagePage.userIdError.isDisplayed())
    {
        await loginMessagePage.userIdError.waitForDisplayed({ timeout: WAIT_TIMEOUT});
        await expect(loginMessagePage.userIdError).toBeDisplayed();
        await expect(loginMessagePage.userIdError).toHaveText(expectedReplay);
        
    }
    else if (await loginMessagePage.passError.isDisplayed())
    {
        await loginMessagePage.passError.waitForDisplayed({ timeout: WAIT_TIMEOUT});
        await expect(loginMessagePage.passError).toBeDisplayed();
        await expect(loginMessagePage.passError).toHaveText(expectedReplay);
    }
    else if (await loginMessagePage.wrongcredentialError.isDisplayed())
    {
        await loginMessagePage.wrongcredentialError.waitForDisplayed({ timeout: WAIT_TIMEOUT});
        await expect(loginMessagePage.wrongcredentialError).toBeDisplayed();
        await expect(loginMessagePage.wrongcredentialError).toHaveText(expectedReplay);
    }
    else 
    {
        await menuPage.handleMenuTab();
        await menuPage.handleLoginMenuOption();
        await loginMessagePage.shopingButton.waitForDisplayed({timeout: WAIT_TIMEOUT});
        await expect(loginMessagePage.shopingButton).toBeDisplayed();
        await loginMessagePage.shopingButton.click();
        await menuPage.handleMenuTab();
        await menuPage.handleLogoutMenuOption();
    }
    
});