// Include playwright module
import {test, expect} from '@playwright/test';


// create class
exports.LoginPage =  class LoginPage{

/**
 * @
 */

    constructor(page){
        // Init page object
        this.page =page;

        //Element
        this.userNameInput = page.locator("input[name='username']");
        this.userPasswordInput = page.locator("input[name='password']");
        this.loginButton = page.locator("button[type='submit']");
    }

    async goto(){
        await this.page.setViewportSize({width:1536 , height:816});
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    }

    async enterUserId(userId){
            await this.userNameInput.fill(userId);
    }

    async enterUserPassword(userPassword){
        await this.userPasswordInput.fill(userPassword);
}

    
async clickLoginButton(){
    await this.loginButton.click();
}
    




}