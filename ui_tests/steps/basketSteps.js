import { RandomGenerators } from "../utility/randomGenerators";
import { basketPageObject } from "../page_objects/BasketPage";
import { basketActions } from "../actions/basketActions";


class BasketSteps {
    async verifyBasketTotalPrice() {
        // Step to verify that the total price in the basket matches the sum of individual item prices
        const itemPrices = await basketActions.getBasketItemPrices();
        const totalPrice = await basketActions.getBasketTotalPrice();
        const calculatedTotal = itemPrices.reduce((acc, price) => acc + price, 0);
        expect(totalPrice).to.equal(calculatedTotal);
    }

    savePreviousPrice() {
        return basketActions.getBasketTotalPrice().then((price) => {
            return cy.wrap(price);
        });
    }

    selectStandardShipping() {
        cy.get(basketPageObject.getStandardShippingOptionLocator()).click();
    }

    checkPriceChange(previousTotalPrice) {
        // Wait until the total price element updates to a new value
        cy.get(basketPageObject.getTotalPriceLocator()).should(($el) => {
            const newPrice = parseFloat($el.text().replace(/[^0-9.]/g, ''));
            expect(newPrice).to.not.equal(previousTotalPrice, 'Price did not change after updating delivery option');
            expect(newPrice).to.not.be.NaN;
        });
    }

    // Fill in personal details for the checkout form
    fillPersonalDetails() {
        const firstName = RandomGenerators.generateRandomName(7);
        const lastName = RandomGenerators.generateRandomName(7);
        const email = RandomGenerators.generateRandomEmail();
        const address = RandomGenerators.generateRandomDigits(4);
        const zipCode = RandomGenerators.generateRandomDigits(5);

        basketActions.fillAndVerifyField(basketPageObject.getFirstNameLocator(), firstName);
        basketActions.fillAndVerifyField(basketPageObject.getLastNameLocator(), lastName);
        basketActions.fillAndVerifyField(basketPageObject.getEmailLocator(), email);
        basketActions.fillAndVerifyField(basketPageObject.getAddressLocator(), address);
        basketActions.selectCountry();
        basketActions.selectCity();
        basketActions.fillAndVerifyField(basketPageObject.getZipCodeLocator(), zipCode);
    }

    // Fill in payment details for the checkout form
    fillPaymentDetails() {
        const cardName = `${RandomGenerators.generateRandomName(5)} ${RandomGenerators.generateRandomName(5)}`;
        const cardNumber = RandomGenerators.generateRandomDigits(16);
        const month = Math.floor(1 + Math.random() * 12).toString().padStart(2, '0');
        const year = Math.floor(25 + Math.random() * 6).toString();
        const expiry = `${month}/${year}`;
        const cvv = RandomGenerators.generateRandomDigits(3);

        basketActions.fillAndVerifyField(basketPageObject.getCardNameLocator(), cardName);
        basketActions.fillAndVerifyField(basketPageObject.getCardNumberLocator(), cardNumber);
        basketActions.fillAndVerifyField(basketPageObject.getCardExpiryLocator(), expiry);
        basketActions.fillAndVerifyField(basketPageObject.getCardCvvLocator(), cvv);
    }

    // Click the checkout button to proceed with the order
    clickCheckoutButton() {
        return cy.get(basketPageObject.getCheckoutButtonLocator()).click();
    }
}

export const basketSteps = new BasketSteps();