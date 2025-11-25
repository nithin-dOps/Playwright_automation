import { test, expect, Locator } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    const emailId:Locator = await page.locator('#input-email');
    const password:Locator = await page.locator('#input-password');
    const loginButton:Locator = await page.locator('input[value="Login"]');
    await emailId.fill("nitban09@gmail.com");
    await password.fill("testpw@123");
    await loginButton.click();
    const title = await page.title();
    console.log("home page title:", title );
    await page.screenshot({path:'login.png'});
 expect(title).toEqual('My Account');
    await page.close();
});