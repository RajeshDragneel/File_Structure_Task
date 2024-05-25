import {
    getAddTicketLinkLocator,
    getAddTicketNameFieldLocator,
    getAddTicketMailFieldLocator,
    getAddTicketSubjectFieldLocator,
    getAddTicketButtonLocator,
    getAddTicketChannelLocator,
    getEditTicketLinkLocator,
    getUpdateTicketButtonLocator,
    getUpdateTicketNameFieldLocator,
    getUpdateTicketMailFieldLocator,
    getUpdateTicketSubjectFieldLocator,
    getDeleteTicketButtonLocator,
    getRandomRowNumber,
    getTotalTickets
} from "../dom-selectors/TicketsPageLocators";

export class TicketsPageObjectModal {

    constructor(page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto('localhost:3000/');
    }

    async getRandomRowNumber() {
        await getRandomRowNumber(this.page);
    }

    async addTicket(name, mail, subject, option) {
        await getAddTicketLinkLocator(this.page).click();
        await getAddTicketNameFieldLocator(this.page).fill(name);
        await getAddTicketMailFieldLocator(this.page).fill(mail);
        await getAddTicketSubjectFieldLocator(this.page).fill(subject);
        if (option == 'twitter') {
            await getAddTicketChannelLocator(this.page).selectOption(option);
        }
        await getAddTicketButtonLocator(this.page).click();
    }

    async editTicket(row, name, mail, subject) {
        await getEditTicketLinkLocator(this.page, row).click();
        await getUpdateTicketNameFieldLocator(this.page).fill(name);
        await getUpdateTicketMailFieldLocator(this.page).fill(mail);
        await getUpdateTicketSubjectFieldLocator(this.page).fill(subject);
        await getUpdateTicketButtonLocator(this.page).click();
    }

    async deleteTicket(row) {
        let cells = await this.page.getByRole('row', { name: (row - 1) + '' }).getByRole('cell');
        let content = cells.nth(2).textContent() + ' ' + cells.nth(3).textContent();
        await getDeleteTicketButtonLocator(this.page, row).click();
        return content;
    }

    async deleteAllTickets() {
        let totalTickets = await getTotalTickets(this.page);
        while (totalTickets) {
            await getDeleteTicketButtonLocator(this.page, totalTickets).click();
            totalTickets--;
        }
    }
};