const {test, expect} = require('@playwright/test');


test('validate login', async({page})=>{

await page.goto('https://demo.automationtesting.in/');

await page.getByRole('button', { name: 'Skip Sign In' }).click();
await expect(page.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
await page.getByPlaceholder('First Name').fill("XYZ");
await page.getByPlaceholder('Last Name').fill("Test Last Name");
await page.locator('input[type="email"]').fill("rocky@gmail.com");
await page.locator('input[type="tel"]').fill("9876099180");
await page.locator('#checkbox1').click();

await page.waitForTimeout(3000);

})