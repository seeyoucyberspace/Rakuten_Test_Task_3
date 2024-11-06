import * as credentials from '../../credentials/credentials.json';

class BasketPageObject {
    navigateToBasket() {
        // Navigate to the basket page using the URL from credentials
        cy.visit(`${credentials.url}/basket`);
    }

    verifyProductInBasket(productName) {
        // Verify that the product is visible in the basket
        cy.contains(productName).should('be.visible');
    }

    verifyTotalPrice(totalPrice) {
        // Verify that the total price in the basket matches the expected value
        cy.get('.total-price').should('contain', totalPrice.toFixed(2));
    }

    changeDeliveryType(type, shippingCost) {
        // Change the delivery type and verify the shipping cost
        cy.get('#delivery-type').select(type);
        cy.get('.shipping-cost').should('contain', shippingCost);
    }

    getTotalPrice() {
        // Get the total price from the basket and return it as a float
        return cy.get('.total-price').invoke('text').then((text) => parseFloat(text.replace('£', '')));
    }
}

export const basketPageObject = new BasketPageObject();