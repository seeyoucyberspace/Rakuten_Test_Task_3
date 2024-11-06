import * as credentials from '../../credentials/credentials.json';

class BasketPageObject {
    navigateToBasket() {
        // Navigate to the basket page using the URL from credentials
        cy.visit(`${credentials.url}/basket`);
    }
}

export const basketPageObject = new BasketPageObject();