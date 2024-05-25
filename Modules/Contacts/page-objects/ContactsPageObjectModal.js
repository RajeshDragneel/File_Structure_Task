import {
    getAddContactNameFieldLocator,
    getAddContactMailFieldLocator,
    getAddContactPhoneFieldLocator,
    getAddContactButtonLocator,
    getRemoveContactButtonLocator,
    getTotalContacts
} from '../dom-selectors/ContactsPageLocators'

export class ContactsPageObjectModal {

    constructor(page) {
        this.page = page;
    }

    async navigateToContactsPage() {
        await this.page.goto('localhost:3000/customers');
    }

    async getRandomRowNumber() {
        await getRandomRowNumber(this.page);
    }

    async addContact(name, mail, phoneNumber) {
        await getAddContactNameFieldLocator(this.page).fill(name);
        await getAddContactMailFieldLocator(this.page).fill(mail);
        await getAddContactPhoneFieldLocator(this.page).fill(phoneNumber);
        await getAddContactButtonLocator(this.page).click();
    }

    async deleteContact(row) {
        let content = await this.page.getByRole('row').nth(row).textContent();
        await getRemoveContactButtonLocator(this.page, row).click();
        return content;
    }

    async deleteAllContacts() {
        let totalContacts = await getTotalContacts(this.page);
        while (totalContacts) {
            await getRemoveContactButtonLocator(this.page, totalContacts).click();
            totalContacts--;
        }
    }
};