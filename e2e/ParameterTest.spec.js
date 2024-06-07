import {test, expect} from '@playwright/test';


const testParameter = 'Sneha';

// for(const input of testParameter){




test('Parameter 1 ', async({page}) =>{
    await page.goto('https://demo.automationtesting.in/');

    await page.getByRole('button', { name: 'Skip Sign In' }).click();
    await expect(page.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
    await page.getByPlaceholder('First Name').fill(testParameter);

    await expect(page).toHaveScreenshot('demo.png');
    await page.waitForTimeout(3000);


})

// }

