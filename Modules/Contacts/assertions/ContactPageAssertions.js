import { expect } from '@playwright/test';
import { getTotalContacts } from '../dom-selectors/ContactsPageLocators';

export class ContactsPageAssertions {

    constructor(page) {
        this.page = page;
    }

    async isRowVisible(row) {
        expect(page.getByRole('row', { name: row })).toBeVisible();
    }

    async isRowHidden(row) {
        expect(page.getByRole('row', { name: row })).not.toBeVisible();
    }

    async isContactsCountZero() {
        expect(await getTotalContacts()).toBe(0);
    }
};