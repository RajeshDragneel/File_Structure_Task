import { expect } from '@playwright/test';
import { getTotalTickets } from '../dom-selectors/TicketsPageLocators';

export class TicketsPageAssertions {

    constructor(page) {
        this.page = page;
    }

    async isRowVisible(row) {
        expect(page.getByRole('row', { name: row })).toBeVisible();
    }

    async isRowHidden(row) {
        expect(page.getByRole('row', { name: row })).not.toBeVisible();
    }

    async isTicketsCountZero() {
        expect(await getTotalTickets()).toBe(0);
    }
};