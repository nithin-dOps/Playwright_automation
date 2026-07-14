import { test, expect } from '@playwright/test';
import loginData from '../../testdata/loginData.json';
import {LoginPage} from '../../pages/LoginPage';

test('Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        loginData.email,
        loginData.password
    );

    await expect(page).toHaveTitle('My Account');

});