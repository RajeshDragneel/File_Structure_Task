import { page } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';

import { TicketsPageObjectModal } from '../page-objects/TicketsPageObjectModal';
import { TicketsPageAssertions } from '../assertions/TicketPageAssertions';

var row;
const tickets = new TicketsPageObjectModal(page);
const ticketsPageAssertions = new TicketsPageAssertions(page);

Given("the user is in tickets module", async () => {
    await tickets.navigateToHomePage();
    return console.log(await page.url());
});



When("the user creates a ticket with {string}, {string}, {string} and {string}", async (name, mail, subject, option) => {
    row = name + ' ' + subject;
    await tickets.addTicket(name, mail, subject, option);
    return console.log('add ticket action comlpeted');
});

Then("the ticket should {string} created", async (outcome) => {
    if (outcome == 'be') {
        await ticketsPageAssertions.isRowVisible(row);
    }
    else {
        await ticketsPageAssertions.isRowHidden(row);
    }
    return console.log('assertion completed');
});



When("the user updates a ticket with {string}, {string}, and {string}", async (name, mail, subject) => {
    let randomRow = await tickets.getRandomRowNumber();
    row = name + ' ' + subject;
    await tickets.editTicket(randomRow, name, mail, subject);
    return console.log('edit ticket action completed');
});

Then("the ticket should {string} updated", async (outcome) => {
    if (outcome == 'be') {
        await ticketsPageAssertions.isRowVisible(row);
    }
    else {
        await ticketsPageAssertions.isRowHidden(row);
    }
    return console.log('assertion completed');
});



When("the user deletes a ticket", async () => {
    let randomRow = await tickets.getRandomRowNumber();
    row = await tickets.deleteTicket(randomRow);
});

Then("the ticket should not be listed in the tickets module", async () => {
    await ticketsPageAssertions.isRowHidden(row);
    return console.log('assertion completed');
});



When("the user deletes all the tickets", async () => {
    await tickets.deleteAllTickets();
});

Then("no tickets should be listed in the tickets module", async () => {
    await isTicketsCountZero();
    return console.log('assertion completed');
});