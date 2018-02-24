module.exports = function warmup(temperature) {
    return typeof(temperature) === "number"? 
        9 / 5.0 * temperature + 32: 
        console.error("temperature is not a number");
};
