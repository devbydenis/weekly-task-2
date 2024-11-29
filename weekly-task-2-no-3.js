// No 3
// Program 1 (Menggunakan Promise)
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok) {
            throw new Error("response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        let names = [];
        for (const element of data) {
            names.push(element.name);
        }
        console.log(names);
    })
    .catch((error) => console.log("Error:", error));

// Program 2 (Menggunakan async-await)
async function fetchDataAPI() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("response was not ok");
        }

        const data = await response.json();
        let names = [];
        for (const element of data) {
            names.push(element.name);
        }
        console.log(names);
    } catch (error) {
        console.log("Error: ", error);
    }
}

fetchDataAPI();
