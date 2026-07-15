import { Page } from '@playwright/test';

export async function takeScreenshot(page: Page, fileName: string) {
    await page.screenshot({
        path: `screenshots/${fileName}.png`
    });
}