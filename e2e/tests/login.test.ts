import { test, expect } from '@playwright/test';
import {LoginPage} from "../models/login_page";

test.describe("Login test suite", () => {
    test('login happy path using mouse', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.getLogin(process.env.USERNAME, process.env.PASSWORD);
        await login.getAccessButton.click();
        await expect(login.getPromoPopup).toBeVisible();
        await login.getClosePromoButton.click();
        await login.getCloseBonoButton.click();
        await expect(login.getUsername).toBeVisible();
    });

    test('login happy path using enter', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.getLogin(process.env.USERNAME, process.env.PASSWORD);
        await login.getPasswordInput.press('Enter');
        await expect(login.getPromoPopup).toBeVisible();
        await login.getClosePromoButton.click();
        await login.getCloseBonoButton.click();
        await expect(login.getUsername).toBeVisible();
    });

    test('login negative scenario no username', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.getLogin('', process.env.PASSWORD);
        await login.getPasswordInput.press('Enter');
        await expect(login.getFieldsEmptyPopUp).toBeVisible();
    });

    test('login negative scenario no password', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.getLogin(process.env.USERNAME, '');
        await login.getPasswordInput.press('Enter');
        await expect(login.getFieldsEmptyPopUp).toBeVisible();
    });

    test('login negative scenario incorrect password', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.getLogin(process.env.USERNAME, 'incorrect password');
        await login.getPasswordInput.press('Enter');
        await expect(login.getLoginErrorPopUp).toBeVisible();
    });
})