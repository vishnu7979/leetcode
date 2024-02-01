var createCounter = function(n) {
    // Initialize the counter with the given value
    let counterValue = n;

    // Define the counter function within the closure
    const counter = function() {
        // Return the current counter value and then increment it
        return counterValue++;
    };

    // Return the counter function
    return counter;
};