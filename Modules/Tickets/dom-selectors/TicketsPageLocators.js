
export async function getAddTicketLinkLocator(page) {
    return page.getByRole('link', { name: 'Add Ticket' });
}

export async function getAddTicketNameFieldLocator(page) {
    return page.getByRole('textbox', { name: 'Full name' });
}

export async function getAddTicketMailFieldLocator(page) {
    return page.getByRole('textbox', { name: 'Email' });
}

export async function getAddTicketSubjectFieldLocator(page) {
    return page.getByRole('textbox', { name: 'Subject' });
}

export async function getAddTicketButtonLocator(page) {
    return page.getByRole('button', { name: 'Add Ticket' });
}

export async function getAddTicketChannelLocator(page) {
    return page.getByRole('combobox');
}

export async function getEditTicketLinkLocator(page, row) {
    return page.getByRole('link', { name: 'Edit' }).nth(row);
}

export async function getUpdateTicketButtonLocator(page) {
    return page.getByRole('button', { name: 'Update ticket' });
}

export async function getUpdateTicketCancelButtonLocator(page) {
    return page.getByRole('button', { name: 'cancel' });
}

export async function getUpdateTicketGoBackButtonLocator(page) {
    return page.getByRole('button', { name: 'Go back' });
}

export async function getUpdateTicketNameFieldLocator(page) {
    return page.getByRole('textbox', { name: 'name' });
}

export async function getUpdateTicketMailFieldLocator(page) {
    return page.getByRole('textbox', { name: 'Email' });
}

export async function getUpdateTicketSubjectFieldLocator(page) {
    return page.getByRole('textbox', { name: 'Subject' });
}

export async function getDeleteTicketButtonLocator(page, row) {
    return page.getByRole('row').nth(row).getByRole('button', { name: 'Delete' });
}

export async function getRandomRowNumber(page) {
    return Math.floor(Math.random() * await page.getByRole('row').count() - 1) + 1;
}

export async function getTotalTickets(page) {
    return page.getByRole('button', { name: 'Delete' }).count();
}