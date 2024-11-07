import * as credentials from '../../credentials/credentials.json';

class BasketPageObject {
    navigateToBasket() {
        // Navigate to the basket page using the URL from credentials
        cy.visit(`${credentials.url}/basket`);
    }

    getBasketItemPriceLocator() {
        return '[id="basketItems"] > li > span[class="text-muted"]';
    }

    getBasketTotalPriceLocator() {
        return 'li[class="list-group-item d-flex justify-content-between"] > strong';
    }

    getStandardShippingOptionLocator() {
        return 'label[for="exampleRadios2"]';
    }

    getTotalPriceLocator() {
        return 'li.list-group-item.d-flex.justify-content-between > strong';
    }

    // Locator for the checkout button
    getCheckoutButtonLocator() {
        return 'button[class="btn btn-primary btn-lg btn-block"]';
    }

    // Locator for the first name input field
    getFirstNameLocator() {
        return "label[for='firstName'] + input";
    }

    // Locator for the last name input field
    getLastNameLocator() {
        return "label[for='lastName'] + input";
    }

    // Locator for the email input field
    getEmailLocator() {
        return "label[for='email'] + input";
    }

    // Locator for the address input field
    getAddressLocator() {
        return "label[for='address'] + input";
    }

    // Locator for the zip code input field
    getZipCodeLocator() {
        return "label[for='zip'] + input";
    }

    // Locator for the country selector dropdown
    getCountrySelectorLocator() {
        return "label[for='country'] + select";
    }

    // Locator for the city selector dropdown
    getCitySelectorLocator() {
        return "#city";
    }

    // Locator for the card name input field
    getCardNameLocator() {
        return "label[for='cc-name'] + input";
    }

    // Locator for the card number input field
    getCardNumberLocator() {
        return "label[for='cc-number'] + input";
    }

    // Locator for the card expiry date input field
    getCardExpiryLocator() {
        return "input[id='cc-expiration']";
    }

    // Locator for the card CVV input field
    getCardCvvLocator() {
        return "input[id='cc-cvv']";
    }


}

export const basketPageObject = new BasketPageObject();