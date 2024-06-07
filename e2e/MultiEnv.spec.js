import {test, expect} from '@playwright/test';

import {LoginData} from '../TestData/data.json';
import {invalidData} from '../TestData/data.json';


let testData = null;

test.beforeAll('Running Before tests', ()=>{

    if(process.env.ENV == 'qa1'){
            testData= LoginData;
    }else{
        testData = invalidData;
    }
})

test('Data Drven Test', async({page})=>{


    await page.goto(process.env.url);
    await page.locator("input[name='username']").fill(testData.userName);
        await page.locator("input[name='password']").fill(testData.userPassword);
        
    
        await page.keyboard.press('Enter');

        await expect(page.locator('.oxd-alert-content-text')).toContainText('Invalid credentials');
        // await page.locator("button[type='submit']").click();
    
    
        await page.waitForTimeout(3000);
    
    })