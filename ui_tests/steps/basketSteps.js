import { basketPage } from '../page_objects/BasketPage';
import { basketActions } from '../actions/basketActions';

export function verifyProductsInBasket(products) {
    products.forEach((product) => {
        basketPage.verifyProductInBasket(product.name);
    });
}

export function verifyTotalPrice(totalPrice) {
    basketPage.verifyTotalPrice(totalPrice);
}

export function changeDeliveryType(type, shippingCost) {
    basketActions.changeDeliveryType(type, shippingCost);
}

export function fillCheckoutDetails(firstName, lastName, email) {
    basketActions.fillCheckoutDetails(firstName, lastName, email);
}
