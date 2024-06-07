import {test, expect} from '@playwright/test';


test('validate env config file', async({page})=>{

    await page.goto(process.env.url);

    await page.locator("input[name='username']").fill(process.env.userID);
    await page.locator("input[name='password']").fill(process.env.userPassword);
    

    await page.keyboard.press('Enter');
    // await page.locator("button[type='submit']").click();


    await page.waitForTimeout(3000);


})