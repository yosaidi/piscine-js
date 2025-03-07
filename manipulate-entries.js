// Corrected function names and implementation

// Function to filter entries based on a callback
function filterEntries(obj, callback) {
    return Object.entries(obj).filter(([key, value]) => callback(key, value));
}

// Function to map entries, modifying the key, value, or both
function mapEntries(obj, callback) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => callback(key, value))
    );
}

// Function to reduce entries to a single value
function reduceEntries(obj, callback, initialValue = 0) {
    return Object.entries(obj).reduce((acc, [key, value]) => callback(acc, key, value), initialValue);
}

// Function to calculate the total calories in the cart
const totalCalories = (cart) =>
    reduceEntries(cart, (acc, key, value) => acc + nutritionDB[key].calories * (value / 100), 0);

// Function to filter items with low carbs (less than 50 grams)
const lowCarbs = (cart) =>
    Object.fromEntries(filterEntries(cart, (key, value) => nutritionDB[key].carbs * (value / 100) < 50));

// Function to calculate and return the nutritional facts for the cart
function cartTotal(cart) {
    return mapEntries(cart, (key, value) => {
        const nutrition = nutritionDB[key];
        const factor = value / 100;
        return {
            calories: nutrition.calories * factor,
            protein: nutrition.protein * factor,
            carbs: nutrition.carbs * factor,
            sugar: nutrition.sugar * factor,
            fiber: nutrition.fiber * factor,
            fat: nutrition.fat * factor,
        };
    });
}
