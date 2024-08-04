function longest(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;
    let longestWord = '';

    words.forEach(word => {
        if (word.length > maxLength) {
            maxLength = word.length;
            longestWord = word;
        }
    });

    return `${longestWord}: ${maxLength} character`;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longest(sentence));  // Output: mengerjakan: 11 character
