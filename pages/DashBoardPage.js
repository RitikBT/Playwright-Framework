import {test, expect} from '@playwright/test';

exports.DashBoardPage = class DashBoardPage{


    constructor(page){
this.page = page;

this.DashBoardText = page.locator(".oxd-topbar-header-breadcrumb-module");


    }

    async validateDashBoardPage(){

        await expect(this.DashBoardText).toContainEqual('Dashboar');

    }





}