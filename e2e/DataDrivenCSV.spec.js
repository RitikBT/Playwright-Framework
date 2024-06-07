import {test, expect} from '@playwright/test';

import fs from 'fs';
import path  from 'path';
import { parse } from 'csv-parse/sync';




    const records =  parse(
        fs.readFileSync(path.join(__dirname, "../TestData/csvData.csv")),
        {
            columns:true,
            skip_empty_lines:true
        });


test('CSV Data Drven Test', async({page})=>{


    await page.goto(process.env.url);
    await page.locator("input[name='username']").fill(records.userID);
        await page.locator("input[name='password']").fill(records.userPassword);
        
    
        await page.keyboard.press('Enter');
        // await page.locator("button[type='submit']").click();
    
    
        await page.waitForTimeout(3000);
    
    })