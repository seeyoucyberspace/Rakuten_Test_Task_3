import { productActions } from '../actions/productActions';
import { productPageObject } from "../page_objects/ProductPage";

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
        cy.get('[id="basketItems"] > li > div').should('have.length', expectedCount);
    }

    async verifyBasketTotalPrice() {
        // Step to verify that the total price in the basket matches the sum of individual item prices
        const itemPrices = await productActions.getBasketItemPrices();
        const totalPrice = await productActions.getBasketTotalPrice();
        const calculatedTotal = itemPrices.reduce((acc, price) => acc + price, 0);
        expect(totalPrice).to.equal(calculatedTotal);
    }

    savePreviousPrice() {
        return productActions.getBasketTotalPrice().then((price) => {
            return cy.wrap(price);
        });
    }

    selectStandardShipping() {
        cy.get(productPageObject.getStandardShippingOptionLocator()).click();
    }

    checkPriceChange(previousTotalPrice) {
        // Wait until the total price element updates to a new value
        cy.get(productPageObject.getTotalPriceLocator()).should(($el) => {
            const newPrice = parseFloat($el.text().replace(/[^0-9.]/g, ''));
            expect(newPrice).to.not.equal(previousTotalPrice, 'Price did not change after updating delivery option');
            expect(newPrice).to.not.be.NaN;
        });
    }
}

export const productSteps = new ProductSteps();