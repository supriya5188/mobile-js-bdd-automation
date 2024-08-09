import menuPage from "../pageobjects/menu.page.js";
let dimention; 
class DeviceSize {
    async getDeviceSize() {
        return await menuPage.scrollEle.getSize();
    }

    async performSwip(direction){
        dimention = await this.getDeviceSize();
        switch(direction){
            case 'up':
            await this.swipUp(dimention.width, dimention.height)
            break;
            case 'down':
            await this.swipDown(dimention.width, dimention.height);
            break;
        }
    }
    async swipUp(width, height){
        return await browser.touchAction([
            { action: 'press', x: width / 2, y: height / 2},
            {action: 'wait', ms: 1000},
            {action: 'moveTo', x: width / 2, y: 0},
            'release'
        ]);
    }

    async swipDown(width, height){
        return await browser.touchAction([
            { action: 'press', x: width / 2, y: height / 2},
            {action: 'wait', ms: 1000},
            {action: 'moveTo', x: width / 2, y: height },
            'release'
        ]);
    }

    async swipLeft(width, height){
        return await browser.touchAction([
            { action: 'press', x: width / 2, y: height / 2},
            {action: 'wait', ms: 1000},
            {action: 'moveTo', x: 0, y: height / 2 },
            'release'
        ]);
    }

    async swipRight(width, height){
        return await browser.touchAction([
            { action: 'press', x: width / 2, y: height / 2},
            {action: 'wait', ms: 1000},
            {action: 'moveTo', x: width, y: height / 2 },
            'release'
        ]);
    }

}
export default new DeviceSize();