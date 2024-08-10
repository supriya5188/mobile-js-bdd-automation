import { $ } from '@wdio/globals'

const SORT_BUTTON = '~sort button';
const SORT_DESENDING_OPTION = '~priceDesc';
const CART_ITEM_PRICE = '//android.widget.TextView[@content-desc="store item price"]';

class cartPage{

    get cartItemPrice() {
        return $$(CART_ITEM_PRICE)
    }

    get sortButton() {
        return $(SORT_BUTTON)
    }

    get sortDessendingOption() {
        return $(SORT_DESENDING_OPTION)
    }

    async collectPrice() {
        let ELEPrice = [];
        let ELEPrice3 = [];
        let eleArrayLength =  await this.cartItemPrice.length;
            for(let i=0;i<eleArrayLength;i++){
                ELEPrice.push((await this.cartItemPrice[i].getText()).replace('$',''));
                ELEPrice.map(str => parseFloat(str));
                ELEPrice3 = (ELEPrice.sort((a, b) => a - b)).reverse();
            }  
        console.log (`Actual Array ${ELEPrice} and expected Array ${ELEPrice3} `)
            if((ELEPrice.length !== ELEPrice3.length)) return false; 
            for(let i=0;i<ELEPrice.length;i++) {
                if(ELEPrice[i] !== ELEPrice3[i])
                    return false;
            }
            return true;
    }
    
}

export default new cartPage();