/**
 * Utilisez la fonction Promise.all pour exécuter 3 appels API en parallèle
 * 
 * urls:
 * - https://jsonplaceholder.typicode.com/todos/1
 * - https://jsonplaceholder.typicode.com/todos/2
 * - https://jsonplaceholder.typicode.com/todos/3
 * 
 * Retournez un tableau contenant les 3 résultats
 * 
 * Vous pouvez utiliser votre fonction apiResponse créé précedement: const {apiResponse} = require("./11_async");
 * 
 * documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
*/

const {apiResponse} = require("./11_async");

const parallel = async () => {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
        "https://jsonplaceholder.typicode.com/todos/3"
    ];
    try {
        const responses = await Promise.all(urls.map(url => apiResponse(url)));
        const data = responses.map(response => response);
        return data;
    } catch (error) {
        throw new Error("Erreur : " + error.message);
    }
}

parallel()
    .then(results => {
        console.log("Result :", results);
    })
    .catch(error => {
        console.error(error);
    });

module.exports = {parallel};
