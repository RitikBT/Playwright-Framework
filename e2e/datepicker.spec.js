const {test, expect} = require('@playwright/test');


test('Validate datepicker', async({page})=>{

await page.goto('https://jqueryui.com/datepicker/');

const frameElement = page.frameLocator('.demo-frame');

// Custom Date
// frameElement.locator('.hasDatepicker').fill('04/01/2023');

// today's date
frameElement.locator('.hasDatepicker').click();
//  await frameElement.locator('.ui-datepicker-today').click();


// Custom date value

const defaultDate = frameElement.locator('.ui-datepicker-today > a');
const curDateValue = await defaultDate.getAttribute('data-date');

let customDate = (parseInt(curDateValue)+2); //26

const element = "[data-dat="+"'"+customDate.toString()+"'"+"]";

await frameElement.locator(element).
click();

await page.waitForTimeout(5000);





} )