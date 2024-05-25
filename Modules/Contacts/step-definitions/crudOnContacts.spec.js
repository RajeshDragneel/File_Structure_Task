import { page } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';

import { ContactsPageObjectModal } from '../page-objects/ContactsPageObjectModal';
import { ContactsPageAssertions } from '../assertions/ContactPageAssertions';

var row;
const contacts = new ContactsPageObjectModal(page);
const contactsPageAssertions = new ContactsPageAssertions(page);

Given("the user is in contacts module", async () => {
    await contacts.navigateToContactsPage();
    return console.log(await page.url());
});



When("the user creates a contact with {string}, {string} and {string}", async (name, mail, phone) => {
    row = name + ' ' + phone + ' ' + mail;
    await contacts.addContact(name, mail, phone);
    return console.log('add contact action comlpeted');
});

Then("the contact should {string} created", async (outcome) => {
    if (outcome == 'be') {
        await contactsPageAssertions.isRowVisible(row);
    }
    else {
        await contactsPageAssertions.isRowHidden(row);
    }
    return console.log('assertion completed');
});



When("the user deletes a contact", async () => {
    let randomRow = await contacts.getRandomRowNumber();
    row = await contacts.deleteContact(randomRow);
});

Then("the contact should not be listed in the contacts module", async () => {
    await contactsPageAssertions.isRowHidden(row);
    return console.log('assertion completed');
});



When("the user deletes all the contacts", async () => {
    await contacts.deleteAllContacts();
});

Then("no contacts should be listed in the contacts module", async () => {
    await isContactsCountZero();
    return console.log('assertion completed');
});