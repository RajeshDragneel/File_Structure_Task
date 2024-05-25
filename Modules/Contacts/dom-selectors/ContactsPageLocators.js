export async function getAddContactNameFieldLocator(page) {
    return page.getByRole('textbox', { name: 'Name' });
}

export async function getAddContactMailFieldLocator(page) {
    return page.getByRole('textbox', { name: 'Email' });
}

export async function getAddContactPhoneFieldLocator(page) {
    return page.getByRole('textbox', { name: 'Phone' });
}

export async function getAddContactButtonLocator(page) {
    return page.getByRole('button', { name: 'Add' });
}

export async function getRemoveContactButtonLocator(page, row) {
    return page.getByRole('row').nth(row).getByRole('button', { name: 'Remove' });
}

export async function getRandomRowNumber(page) {
    return Math.floor(Math.random() * await page.getByRole('row').count() - 1) + 1;
}

export async function getTotalContacts(page) {
    return page.getByRole('button', { name: 'Remove' }).count();
}