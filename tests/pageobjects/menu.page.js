import { $ } from '@wdio/globals'
import { WAIT_TIMEOUT } from '../helpers/Constants.js';

const MENU_TAB = '~open menu';
const MENU_LOGIN_OPTION = '~menu item log in';
const MENU_LOGOUT_OPTION = '~menu item log out'
const SROLL_ELE = '//android.widget.LinearLayout'

class menuPage {    
    get menuTab (){
        return $(MENU_TAB);
    }
    
    get menuLoginOption() {
        return $(MENU_LOGIN_OPTION);
    }
    
    get menuLogoutOption () {
        return $(MENU_LOGOUT_OPTION);
    }

    get scrollEle() {
        return $(SROLL_ELE);
    }

    /**
     * 
     * @returns {Promise<boolean}, true if manu tab will displayed and clicked else false
     */
    async handleMenuTab() {
        try {
        await this.menuTab.waitForDisplayed({timeout: WAIT_TIMEOUT});
        const isMenuTabDisplayed = await this.menuTab.isDisplayed();
        await expect(isMenuTabDisplayed).toEqual(true);
        await this.menuTab.click();
        return true
        } catch (error) {
            console.log('Menu tab error');
            return false;
            }
    }

    /**
     * 
     * @returns {Promise<boolean}, true if Login Menu Option will displayed and clicked else false
     */
    async handleLoginMenuOption() {
        try{
        await this.menuLoginOption.waitForDisplayed({timeout: WAIT_TIMEOUT});
        const isLoginOptDisplayed = await this.menuLoginOption.isDisplayed();
        await expect(isLoginOptDisplayed).toEqual(true);
        await this.menuLoginOption.click();
        return true;
        } catch (error) {
            console.log('Error on login option on menu page');
            return false;
            }
    }

    /**
     * 
     * @returns {Promise<boolean}, true if Logout Menu Option will displayed and clicked else false
     */
    async handleLogoutMenuOption() {
        try{
        await this.menuLogoutOption.waitForDisplayed({timeout: WAIT_TIMEOUT});
        await expect(this.menuLogoutOption).toBeDisplayed();
        await this.menuLogoutOption.click();
        return true;
        } catch (error) {
            console.log('Error on logout option on menu page');
            return false;
            }
    }
    
}
    
    export default new menuPage();