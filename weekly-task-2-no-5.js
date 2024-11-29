// // 2.2 old

// function FazzFood(harga, voucher, jarak, pajak) {
//     let hargaSetelahDiskon = 0;
//     const MAX_DISCOUNT_50 = 50000;
//     const MAX_DISCOUNT_60 = 30000;
//     const DISCOUNT_50 = 0.5;
//     const DISCOUNT_60 = 0.6;
//     const biayaAntar = jarak <= 2 ? 5000 : 5000 + (jarak - 2) * 3000;
//     const pajakResto = pajak ? harga * 0.05 : 0;

//     if (harga >= 50000 && voucher === "FAZZFOOD50") {
//         if (harga * DISCOUNT_50 > MAX_DISCOUNT_50) {
//             hargaSetelahDiskon = harga - MAX_DISCOUNT_50;
//         }

//         hargaSetelahDiskon = harga - harga * DISCOUNT_50;
//     } else if (harga >= 25000 && harga < 50000 && voucher === "DITRAKTIR60") {
//         if (harga * DISCOUNT_60 > MAX_DISCOUNT_60) {
//             hargaSetelahDiskon = harga - MAX_DISCOUNT_60;
//         }

//         hargaSetelahDiskon = harga - harga * DISCOUNT_60;
//     } else {
//         hargaSetelahDiskon = harga;
//     }

//     return {
//         harga: harga,
//         potongan: hargaSetelahDiskon,
//         biayaAntar: biayaAntar,
//         pajak: pajakResto,
//         subtotal: hargaSetelahDiskon + biayaAntar + pajakResto,
//     };
// }

// console.log(FazzFood(75000, "FAZZFOOD50", 5, true));
// console.log(FazzFood(35000, "DITRAKTIR60", 5, true));
// console.log(FazzFood(15000, "DITRAKTIR60", 5, false));

//----------------------------------------------------------------------------------------------------------------------------

// final version after refactory
function calculateFazzFoodPrice(harga, voucher, jarak, pajak) {
    const DISCOUNT_VOUCHER = {
        FAZZFOOD50: { minimalOrder: 50000, discountRate: 0.5, discountMax: 50000 },
        DITRAKTIR60: { minimalOrder: 25000, discountRate: 0.6, discountMax: 30000 },
    };

    // hitung diskon
    const calculateFoodDiscount = (foodPrice, voucher) => {
        const discountInfo = DISCOUNT_VOUCHER[voucher];
        const { discountRate, minimalOrder, discountMax } = discountInfo;
        const totalDiscount = foodPrice * discountRate;

        if (!discountInfo || foodPrice < minimalOrder) {
            return 0;
        }

        return Math.min(totalDiscount, discountMax);
    };

    // hitung ongkir
    const calculateDeliveryFee = (distance) => {
        return distance <= 2 ? 5000 : 5000 + (distance - 2) * 3000;
    };

    // hitung pajak restoran
    const calculateRestaurantTax = (foodPrice, isTaxed) => {
        return isTaxed ? foodPrice * 0.05 : 0;
    };

    // masukin pemanggilan function diatas ke variabel masing-masing
    const discount = calculateFoodDiscount(harga, voucher);
    const deliveryFee = calculateDeliveryFee(jarak);
    const tax = calculateRestaurantTax(harga, pajak);

    // hitung harga setelah diskon dan subtotal
    const priceAfterDiscount = harga - discount;
    const subtotal = priceAfterDiscount + deliveryFee + tax;

    return {
        harga,
        diskon: discount,
        hargaSetelahdiskon: priceAfterDiscount,
        ongkir: deliveryFee,
        pajak: tax,
        subtotal,
    };
}

console.log(calculateFazzFoodPrice(75000, "FAZZFOOD50", 5, true));
console.log(calculateFazzFoodPrice(30000, "DITRAKTIR60", 5, true));
console.log(calculateFazzFoodPrice(20000, "DITRAKTIR60", 5, true));
