import { productSteps } from '../../steps/productSteps';
import { basketPageObject } from '../../page_objects/BasketPage';
import * as credentials from '../../../credentials/credentials.json';

describe('Sweet Shop UI Tests', () => {
    let addedProducts = [];

    beforeEach(() => {
        // Ensure the website is accessible
        cy.visit(credentials.url);

        // Add products to the basket and store their names
        productSteps.getProductNames().then((names) => {
            addedProducts = names;
            productSteps.addMultipleProductsToBasket();
        });
    });

    it('Verify all selected items are present in basket', () => {
        // Navigate to the basket page
        basketPageObject.navigateToBasket();

        // Verify that all products are present in the basket
        productSteps.verifyAllProductsInBasket(addedProducts);
    });

    // Other tests...
});
