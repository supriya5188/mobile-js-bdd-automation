import { $ } from '@wdio/globals'
import { WAIT_TIMEOUT }from '../helpers/Constants.js'

const USER_ID = '~Username input field';
const USER_PASS = '~Password input field';
const LOGIN_Button = '~Login button';

class loginPage {    
    get userID() {
        return $(USER_ID);
    }
    
    get userPass() {
        return $(USER_PASS);
    }
    
    get loginButton() {
        return $(LOGIN_Button);
    }

    /**
     * 
     * @param {string} userId 
     * @param {string} password 
     * @returns {Promise<boolean}, true if all element dispaly and user click on login button else false
     */

    async handleLoginWithCredentials(userId, password) {
        try {
             await this.userID.waitForDisplayed({timeout: WAIT_TIMEOUT});
             const isUserIdBoxDiplayed = await this.userID.isDisplayed();
             await this.userPass.waitForDisplayed({timeout: WAIT_TIMEOUT});
             const isUserPassBoxDiplayed = await this.userPass.isDisplayed();
             await this.loginButton.waitForDisplayed({timeout: WAIT_TIMEOUT});
             const isLoginButtonDisplayed = await this.loginButton.isDisplayed();
             await expect(isUserIdBoxDiplayed && isUserPassBoxDiplayed && isLoginButtonDisplayed).toEqual(true);
             await this.userID.setValue(userId);
             await this.userPass.setValue(password);
             await this.loginButton.click();
             return true
            } catch (error) {
            console.log('error while login page');
            return false;
            }
        }
}
    
    export default new loginPage();