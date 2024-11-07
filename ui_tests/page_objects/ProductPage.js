import * as credentials from '../../credentials/credentials.json';

class ProductPageObject {

    getProductNames() {
        // Get the names of all product cards and return them as a promise
        return cy.get('h4[class="card-title"]').then(($els) => {
            return Cypress._.map($els, 'innerText').map((name) => name.trim());
        });
    }

    getAddToBasketButton() {
        return '[class="btn btn-success btn-block addItem"]';
    }

    getBasketBadge() {
        return 'span.badge.badge-success';
    }

    getBasketItemsLocator() {
        return '[id="basketItems"] > li > div';
    }
}

export const productPageObject = new ProductPageObject();