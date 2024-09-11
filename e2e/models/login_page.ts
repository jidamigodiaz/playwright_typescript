import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly getLoginButton: Locator;
    readonly getCookiePopUp: Locator;
    readonly getAcceptCookiesButton: Locator;
    readonly getLoginPopUp: Locator;
    readonly getUserInput: Locator;
    readonly getPasswordInput: Locator;
    readonly getAccessButton: Locator;
    readonly getPromoPopup: Locator;
    readonly getClosePromoButton: Locator;
    readonly getUsername: Locator;
    readonly getBonoPopUpIsVisible: Promise<boolean>;
    readonly getCloseBonoButton: Locator;
    readonly getFieldsEmptyPopUp: Locator;
    readonly getLoginErrorPopUp: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getLoginButton = page.locator('button').filter({hasText: 'Acceder'});
        this.getCookiePopUp = page.getByText('Configurar Cookies seleccionar / rechazar todo Cookies técnicas: Son aquéllas');
        this.getAcceptCookiesButton = page.getByRole('button', {name: 'Aceptar todas las cookies'});
        this.getLoginPopUp = page.locator('div').filter({ hasText: '¡Para poder apostar tienes' });
        this.getUserInput = page.getByRole('textbox', {name: 'Usuario / Correo electrónico'});
        this.getPasswordInput = page.getByLabel('Contraseña');
        this.getAccessButton = page.getByRole('button', {name: 'Acceder'});
        this.getPromoPopup = page.locator('#dytmpl-103400288').getByRole('link');
        this.getClosePromoButton = page.locator('.dy-lb-close');
        this.getUsername = page.getByRole('button', { name: process.env.USERNAME });
        this.getBonoPopUpIsVisible = page.frameLocator('#ion-overlay-5 iframe').locator('#bonusCasino').isVisible();
        this.getCloseBonoButton = page.locator('#ion-overlay-5').getByRole('button');
        this.getFieldsEmptyPopUp = page.getByText('Revisa que todos los campos');
        this.getLoginErrorPopUp = page.getByText('Por favor, revisa los datos y');
    }

    async goto() {
        await this.page.goto(process.env.BASE_URL);
    }

    async getLogin(username: string, password: string) {
        await this.getLoginButton.click();
        await expect(this.getCookiePopUp).toBeVisible();
        await this.getAcceptCookiesButton.click();
        await expect(this.getLoginPopUp).toBeVisible();
        await this.getUserInput.fill(username, );
        await this.getPasswordInput.fill(password, );
    }
}