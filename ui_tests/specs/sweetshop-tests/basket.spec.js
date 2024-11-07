import { productSteps } from '../../steps/productSteps';
import { basketPageObject } from '../../page_objects/BasketPage';
import * as credentials from '../../../credentials/credentials.json';
import { productActions } from "../../actions/productActions";

describe('Sweet Shop UI Tests', () => {
    beforeEach(() => {
        // Ensure the website is accessible
        cy.visit(credentials.url);

        // Add products to the basket
        productSteps.addMultipleProductsToBasket();
        basketPageObject.navigateToBasket();
    });

    it('Verify all selected items are present in basket', () => {
        // Verify that the basket contains 4 items
        productSteps.verifyBasketItemCount(4);
    });

    it('Verify total price in basket matches individual item prices', () => {
        // Verify the total price matches the sum of the individual item prices
        productSteps.verifyBasketTotalPrice();
    });

    it('Verify that selecting Standard Shipping updates the total price', () => {
        // Remember the previous total price before selecting the Standard Shipping option
        productSteps.savePreviousPrice().then((previousPrice) => {
            // Click on the Standard Shipping delivery option
            productSteps.selectStandardShipping();

            // Verify the total price changes after selecting Standard Shipping
            productSteps.checkPriceChange(previousPrice);
        });
    });

    // Other tests...
});