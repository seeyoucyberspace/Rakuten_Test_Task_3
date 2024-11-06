import { basketPage } from '../page_objects/BasketPage';

export function changeDeliveryType(type, shippingCost) {
    basketPage.changeDeliveryType(type, shippingCost);
}

export function fillCheckoutDetails(firstName, lastName, email) {
    // Example implementation using credentials from credentials.json
    cy.readFile('credentials/credentials.json').then((creds) => {
        basketPage.fillCheckoutDetails(firstName, lastName, creds.email);
    });
}
