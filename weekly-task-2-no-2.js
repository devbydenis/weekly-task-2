// No 2
function getDataFromServer(status, callback) {
    setTimeout(() => {
        if (status) {
            callback(["product 1", "product 2", "product 3"], null);
        } else {
            const err = new Error("failed to fetch data");
            err.name = "Error";
            callback(null, err);
        }
    }, 3000);
}

function processData(result, error) {
    try {
        if (error) {
            throw error
        }
        console.log('The result: ', result)
    } catch (err) {
        console.log(error);
    }
}

getDataFromServer(true, processData);
