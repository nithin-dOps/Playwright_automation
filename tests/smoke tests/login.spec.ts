import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import { takeScreenshot } from '../../utils/helper';

test('Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        process.env.TEST_EMAIL || 'your_test_email@example.com',
        process.env.TEST_PASSWORD || 'your_test_password'
    );
    await takeScreenshot(page, 'login');
    await expect(page).toHaveTitle('My Account');

});