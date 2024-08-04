function reverseAlphabet(str) {
    const letters = str.match(/[a-zA-Z]/g).reverse().join('');
    const digits = str.match(/\d+/g).join('');
    return letters + digits;
}

const str = "NEGIE1";
console.log(reverseAlphabet(str));  // Output: EIGEN1