// NO.1
function fetchData(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === true) {
                resolve("Data berhasil diambil");
            } else {
                reject("Gagal mengambil data");
            }
        }, 3000);
    });
}

// then-catch
fetchData(true)
    .then((hasil) => console.log(`Hasil: ${hasil}`))
    .catch((error) => console.log(`Error: ${error}`));

// Async-Await with try catch
async function prosesData() {
    try {
        const data = await fetchData(false);
        console.log(`Hasil: ${data}`);
    } catch (error) {
        console.log("Error:", error);
    }
}

prosesData();
