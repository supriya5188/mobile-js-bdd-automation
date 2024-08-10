import { $ } from '@wdio/globals'

const USER_ID_ERROR = '//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView';
const PASS_ERROR = '//android.view.ViewGroup[@content-desc="Password-error-message"]/android.widget.TextView';
const WRONG_CREDENTIALS_ERROR = '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView';
const SHOPING_BUTTON = '~Go Shopping button';


class verificationMessagePage {    
    get userIdError() {
        return $(USER_ID_ERROR);
    }
    
    get passError() {
        return $(PASS_ERROR);
    }
    
    get wrongcredentialError() {
        return $(WRONG_CREDENTIALS_ERROR);
    }

    get shopingButton() {
        return $(SHOPING_BUTTON);
    }
}
    
    export default new verificationMessagePage();