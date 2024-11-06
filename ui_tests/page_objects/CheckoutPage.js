class CheckoutPage {
    fillCheckoutDetails(firstName, lastName, email) {
        cy.get('input[name=firstName]').type(firstName);
        cy.get('input[name=lastName]').type(lastName);
        cy.get('input[name=email]').type(email);
    }

    submitOrder() {
        cy.get('button[type=submit]').click();
        cy.contains('Order Placed!').should('be.visible');
    }
}

export const checkoutPage = new CheckoutPage();
