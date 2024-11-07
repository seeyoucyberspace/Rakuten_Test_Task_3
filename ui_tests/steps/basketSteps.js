import { productActions } from '../actions/productActions';
import { productPageObject } from "../page_objects/ProductPage";
import { RandomGenerators } from "../utility/randomGenerators";


class BasketSteps {
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

    // Fill in personal details for the checkout form
    fillPersonalDetails() {
        const firstName = RandomGenerators.generateRandomName(7);
        const lastName = RandomGenerators.generateRandomName(7);
        const email = RandomGenerators.generateRandomEmail();
        const address = RandomGenerators.generateRandomDigits(4);
        const zipCode = RandomGenerators.generateRandomDigits(5);

        productActions.fillAndVerifyField(productPageObject.getFirstNameLocator(), firstName);
        productActions.fillAndVerifyField(productPageObject.getLastNameLocator(), lastName);
        productActions.fillAndVerifyField(productPageObject.getEmailLocator(), email);
        productActions.fillAndVerifyField(productPageObject.getAddressLocator(), address);
        productActions.selectCountry();
        productActions.selectCity();
        productActions.fillAndVerifyField(productPageObject.getZipCodeLocator(), zipCode);
    }

    // Fill in payment details for the checkout form
    fillPaymentDetails() {
        const cardName = `${RandomGenerators.generateRandomName(5)} ${RandomGenerators.generateRandomName(5)}`;
        const cardNumber = RandomGenerators.generateRandomDigits(16);
        const month = Math.floor(1 + Math.random() * 12).toString().padStart(2, '0');
        const year = Math.floor(25 + Math.random() * 6).toString();
        const expiry = `${month}/${year}`;
        const cvv = RandomGenerators.generateRandomDigits(3);

        productActions.fillAndVerifyField(productPageObject.getCardNameLocator(), cardName);
        productActions.fillAndVerifyField(productPageObject.getCardNumberLocator(), cardNumber);
        productActions.fillAndVerifyField(productPageObject.getCardExpiryLocator(), expiry);
        productActions.fillAndVerifyField(productPageObject.getCardCvvLocator(), cvv);
    }

    // Click the checkout button to proceed with the order
    clickCheckoutButton() {
        return cy.get(productPageObject.getCheckoutButtonLocator()).click();
    }
}

export const basketSteps = new BasketSteps();