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
}

export const productSteps = new ProductSteps();