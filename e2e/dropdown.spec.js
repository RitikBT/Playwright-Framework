const {test, expect} = require('@playwright/test');

test('first test case', async({page}) =>{

await page.goto('https://www.facebook.com/');
await page.getByText('Create new account').click();

const monthList = page.locator('#month');


await expect(monthList).toHaveValue('5');

monthList.selectOption('1');
monthList.selectOption('Feb');

await page.waitForTimeout(2000)

})

test.skip('2 test case', async({page}) =>{

    await page.goto('https://www.facebook.com/');
    await page.getByText('Create new account').click();
    
    const monthList = page.locator('#month');
    
    
    await expect(monthList).toHaveValue('5');
    
    monthList.selectOption('1');
    monthList.selectOption('Feb');
    
    await page.waitForTimeout(2000)
    
    })

    test('third 3', async({page}) =>{

        await page.goto('https://www.facebook.com/');
        await page.getByText('Create new account').click();
        
        const monthList = page.locator('#month');
        
        
        await expect(monthList).toHaveValue('5');
        
        monthList.selectOption('1');
        monthList.selectOption('Feb');
        
        await page.waitForTimeout(2000)
        
        })