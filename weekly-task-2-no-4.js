function cekPalindrom(string) {
    const reverseWord = string.split('').reverse().join('')
    
    return string === reverseWord ? "it's a palindrom" : "it\'s not a palindrom";
}

console.log(cekPalindrom("malam")); // it's a palindrom
console.log(cekPalindrom("siang")); // it's not a palindrom


function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWords("Saya Belajar Javascript"))  // Javascript Belajar Saya