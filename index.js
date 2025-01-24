function validateCreditCard(cardNumber) {
    const cardPatterns = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})?$/, // Starts with 4
        MasterCard: /^(5[1-5][0-9]{14}|2(22[1-9]|2[3-9][0-9]|[3-6][0-9]{2}|7[01][0-9]|720)[0-9]{12})$/, // Starts with 51-55 or 2221-2720
        Elo: /^(4011|4312|4389)/, // Starts with 4011, 4312, 4389 (expand if needed)
        "American Express": /^3[47][0-9]{13}$/, // Starts with 34 or 37
        Discover: /^(6011|65|64[4-9])[0-9]{12}$/, // Starts with 6011, 65, or 644-649
        Hipercard: /^6062[0-9]{12}$/ // Starts with 6062
    };

    for (const [brand, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            return `${cardNumber} is a valid ${brand} card.`;
        }
    }

    return `${cardNumber} is not a valid credit card number.`;
}

// Example usage:
console.log(validateCreditCard("4111111111111111")); // Visa
console.log(validateCreditCard("5105105105105100")); // MasterCard
console.log(validateCreditCard("4011780000000000")); // Elo
console.log(validateCreditCard("378282246310005")); // American Express
console.log(validateCreditCard("6011111111111117")); // Discover
console.log(validateCreditCard("6062828282828282")); // Hipercard
