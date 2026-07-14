import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.locator('#input-email');
        this.password = page.locator('#input-password');
        this.loginButton = page.locator('input[value="Login"]');
    }

    async goto() {
        await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    }

    async login(email: string, password: string) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}