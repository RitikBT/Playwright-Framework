import { test, expect } from '@playwright/test';

test('Vallidate github Error message', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page.getByRole('button', { name: 'Sign in', exact: true })).toBeVisible();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('ritikbt387@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Test@12345');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});