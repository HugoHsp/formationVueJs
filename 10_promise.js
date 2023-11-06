
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("2 secondes passées");
        }, 2000); // Attendre 2 secondes (2000 millisecondes)
    })
};

module.exports = {sleep};