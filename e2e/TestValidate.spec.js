const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');

import {DashBoardPage} from '../pages/DashBoardPage';

test('Validate Dashboard page', async({page})=>{
    
    const login=new LoginPage(page);
    await login.goto();
    await login.enterUserId("Admin");
    await login.enterUserPassword("admin123");
    await login.clickLoginButton();

    const dashboard = new DashBoardPage(page);
    await dashboard.validateDashBoardPage(); 


})