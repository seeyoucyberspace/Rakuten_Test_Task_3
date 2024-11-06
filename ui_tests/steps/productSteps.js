import { productActions } from '../actions/productActions';

class ProductSteps {
    async getProductNames() {
        // Step that calls the action to get product names and returns them
        const productNames = await productActions.getProductNames();
        return productNames;
    }

    addMultipleProductsToBasket() {
        // Step that calls the action to add products to the basket
        productActions.addProductsToBasket();
    }

    verifyAllProductsInBasket(addedProducts) {
        cy.get('[id="basketItems"] > li > div > h6').each(($el, index) => {
            cy.wrap($el).should('have.text', addedProducts[index]);
        });
    }

}

export const productSteps = new ProductSteps();