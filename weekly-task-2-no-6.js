// Example
// const before = '595656 0 159466 0 56'
// const after = '555669 0 145669 0 56'

function divideSort(number) {
    //1 split number dengan dipisahkan berdasarkan angka 0
    const splitNumber = String(number).split("0");
    //4 inisialisasi array kosong untuk menampung element hasil iterasi
    let result = [];

    //2 lakukan perulangan for of untuk mengakses tiap elemen splitNumber [ '595656', '159466', '56' ]
    for (const element of splitNumber) {
    //3 split elemen per karakter kemudian di sort lalu join kembali seperti semula
        const splitElement = element.split("").sort().join("");
    //5 hasilnya di push ke variabel result
        result.push(splitElement);
    }
    //6 join variabel result kemudian convert menjadi Number kembali
    return Number(result.join(""));
}

console.log(divideSort(5956560159466056)); // 55566914566956

// const s1 = "159466".split("").sort();
// console.log(s1);
