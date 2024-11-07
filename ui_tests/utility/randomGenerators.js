export class RandomGenerators {
    // Статические методы для генерации случайных значений
    static generateRandomName(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = characters.charAt(Math.floor(Math.random() * 26));
        for (let i = 1; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * 52));
        }
        return result;
    }

    static generateRandomEmail() {
        return `${this.generateRandomName(5)}@example.com`;
    }

    static generateRandomDigits(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += Math.floor(Math.random() * 10);
        }
        return result;
    }
}
