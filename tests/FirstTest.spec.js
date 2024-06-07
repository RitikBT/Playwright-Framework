import { test, expect } from require('@playwright/test');


test('validate login', async({page})=>{

await page.goto('https://demo.automationtesting.in/');

await page.getByRole('button', { name: 'Skip Sign In' }).click();
await expect(page.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
await page.getByPlaceholder('First Name').fill("XYZ");

})