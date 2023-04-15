/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => resolve(`${millis} milliseconds later`), millis);
    });
};
