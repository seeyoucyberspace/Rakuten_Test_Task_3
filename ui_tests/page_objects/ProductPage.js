import * as credentials from '../../credentials/credentials.json';

class ProductPageObject {
    addProductToBasket() {
        // Use the specified locator for all "Add to Basket" buttons
        cy.get('[class="btn btn-success btn-block addItem"]').click({ multiple: true });
    }

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

    getBasketItemPriceLocator() {
        return '[id="basketItems"] > li > span[class="text-muted"]';
    }

    getBasketTotalPriceLocator() {
        return 'li[class="list-group-item d-flex justify-content-between"] > strong';
    }

    getStandardShippingOptionLocator() {
        return 'label[for="exampleRadios2"]';
    }

    getTotalPriceLocator() {
        return 'li.list-group-item.d-flex.justify-content-between > strong';
    }
}

export const productPageObject = new ProductPageObject();