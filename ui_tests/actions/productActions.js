import { productPageObject } from '../page_objects/ProductPage';

class ProductActions {
    constructor(productPageObject) {
        this.productPageObject = productPageObject;
    }

    addProductsToBasket() {
        // Locator for displaying the number of items in the basket
        const basketBadge = this.productPageObject.getBasketBadge();
        const addToBasketButton = this.productPageObject.getAddToBasketButton();

        // Click on each "Add to Basket" button in sequence
        cy.get(addToBasketButton).each(($el, index) => {
            cy.wrap($el).click();

            // Verify that the basket count has increased by 1 after each click
            cy.get(basketBadge).should('have.text', (index + 1).toString());
        });
    }

    getProductNames() {
        // Get the names of all products on the homepage and return them as a promise
        return this.productPageObject.getProductNames();
    }

    getBasketItemPrices() {
        // Get the prices of all items in the basket
        const basketItemPriceLocator = this.productPageObject.getBasketItemPriceLocator();
        return cy.get(basketItemPriceLocator).then(($els) => {
            return Cypress._.map($els, 'innerText').map((price) => parseFloat(price.replace('£', '').trim()));
        });
    }

    getBasketTotalPrice() {
        // Get the total price from the basket
        const basketTotalPriceLocator = this.productPageObject.getBasketTotalPriceLocator();
        return cy.get(basketTotalPriceLocator).invoke('text').then((text) => parseFloat(text.replace('£', '').trim()));
    }
}

export const productActions = new ProductActions(productPageObject);