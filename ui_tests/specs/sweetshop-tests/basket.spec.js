import { productSteps } from '../../steps/productSteps';
import { basketPageObject } from '../../page_objects/BasketPage';
import * as credentials from '../../../credentials/credentials.json';

describe('Sweet Shop UI Tests', () => {
    beforeEach(() => {
        // Ensure the website is accessible
        cy.visit(credentials.url);

        // Add products to the basket
        productSteps.addMultipleProductsToBasket();
    });

    it('Verify all selected items are present in basket', () => {
        // Navigate to the basket page
        basketPageObject.navigateToBasket();

        // Verify that the basket contains 4 items
        productSteps.verifyBasketItemCount(4);
    });

    it('Verify total price in basket matches individual item prices', () => {
        // Navigate to the basket page
        basketPageObject.navigateToBasket();

        // Verify the total price matches the sum of the individual item prices
        productSteps.verifyBasketTotalPrice();
    });

    // Other tests...
});