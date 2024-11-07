import { productActions } from '../actions/productActions';
import { productPageObject } from '../page_objects/ProductPage';

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

    verifyBasketItemCount(expectedCount) {
        // Verify that the basket contains the expected number of items
        cy.get(productPageObject.getBasketItemsLocator()).should('have.length', expectedCount);
    }
}

export const productSteps = new ProductSteps();
