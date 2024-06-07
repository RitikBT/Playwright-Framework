import { test, expect } from '@playwright/test';


test('Screenshot ', async ({ page }) => {
    await page.goto('https://www.amazon.in/');

    await page.screenshot({path: './Screenshot/FullPageScreenshot.png', fullPage : true});

})