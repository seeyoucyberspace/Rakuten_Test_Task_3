import { productSteps } from '../../steps/productSteps';
import { basketPageObject } from '../../page_objects/BasketPage';
import * as credentials from '../../../credentials/credentials.json';
import { productActions } from "../../actions/productActions";
import { basketSteps } from "../../steps/basketSteps";

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
        basketSteps.verifyBasketTotalPrice();
    });

    it('Verify that selecting Standard Shipping updates the total price', () => {
        // Remember the previous total price before selecting the Standard Shipping option
        basketSteps.savePreviousPrice().then((previousPrice) => {
            // Click on the Standard Shipping delivery option
            basketSteps.selectStandardShipping();

            // Verify the total price changes after selecting Standard Shipping
            basketSteps.checkPriceChange(previousPrice);
        });
    });

    it('Fill details and perform negative checkout test with invalid card', () => {
        // Fill in personal details
        basketSteps.fillPersonalDetails();

        // Fill in payment details
        basketSteps.fillPaymentDetails();

        // Click on the checkout button and verify it was clicked
        basketSteps.clickCheckoutButton().should('be.visible');
    });
});