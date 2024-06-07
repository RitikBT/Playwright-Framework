const {test, expect} = require('@playwright/test');


test.describe('Regression', ()=>{

test('Regression 1', async({page}) =>{
    await page.goto('https://demo.automationtesting.in/');

    await page.getByRole('button', { name: 'Skip Sign In' }).click();
    await expect(page.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
    await page.getByPlaceholder('First Name').fill("XYZ");
})

test('Regression 2', async({page}) =>{
    await page.goto('https://demo.automationtesting.in/');

await page.getByRole('button', { name: 'Skip Sign In' }).click();
await expect(page.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
await page.getByPlaceholder('First Name').fill("XYZ");
})

test('Regression 3', async({page}) =>{
    await page.goto('https://demo.automationtesting.in/');

await page.getByRole('button', { name: 'Skip Sign In' }).click();
await expect(page.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
await page.getByPlaceholder('First Name').fill("XYZ");
})




})



test.describe('Smoke', ()=>{

test('Smoke 1', async({page})=>{
    await page.goto('https://demo.automationtesting.in/');

    await page.getByRole('button', { name: 'Skip Sign In' }).click();
    await expect(page.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
    await page.getByPlaceholder('First Name').fill("XYZ");

})

test('Smoke 2', async({page})=>{
    await page.goto('https://demo.automationtesting.in/');

    await page.getByRole('button', { name: 'Skip Sign In' }).click();
    await expect(page.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
    await page.getByPlaceholder('First Name').fill("XYZ");
    
})

test('Smoke 3', async({page})=>{
    await page.goto('https://demo.automationtesting.in/');

    await page.getByRole('button', { name: 'Skip Sign In' }).click();
    await expect(page.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
    await page.getByPlaceholder('First Name').fill("XYZ");
    
})

    
})