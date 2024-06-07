import {test, expect} from '@playwright/test';
import {LoginData} from '../TestData/data.json';


test('Data Drven Test', async({page})=>{


await page.goto(process.env.url);
await page.locator("input[name='username']").fill(LoginData.userName);
    await page.locator("input[name='password']").fill(LoginData.userPassword);
    

    await page.keyboard.press('Enter');
    // await page.locator("button[type='submit']").click();


    await page.waitForTimeout(3000);

})