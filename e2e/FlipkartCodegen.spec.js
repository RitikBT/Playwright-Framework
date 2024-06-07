import { test, expect } from '@playwright/test';

test('Recorded by using codegen ', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByPlaceholder('Search for Products, Brands').click();
  await page.getByPlaceholder('Search for Products, Brands').fill('iphone ');
  await page.getByRole('link', { name: 'iphone 14 pro max' }).click();
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
  await expect(page1.locator('#container')).toContainText('Sold Out');
  await page1.locator('.XqNaEv').click();
  await page.getByPlaceholder('Search for products, brands').click();
  await page.getByPlaceholder('Search for products, brands').fill('iphone 15');
  await page.getByRole('link', { name: 'iphone 15 pro max' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Apple iPhone 15 Pro Max (Black Titanium, 256 GB) Add to Compare Apple iPhone 15' }).click();
  const page2 = await page2Promise;
  await page2.locator('.XqNaEv').first().click();
  await page2.getByRole('link', { name: 'COMPARE 1' }).click();
  await expect(page2.locator('#fk-compare-page')).toContainText('Compare Apple iPhone 14 Pro Max (Space Black, 512 GB) vs others');
});