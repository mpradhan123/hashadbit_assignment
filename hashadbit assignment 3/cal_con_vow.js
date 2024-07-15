function countVowelsAndConsonants(str) {
    str = str.toLowerCase();
    let vowelCount = 0;
    let consonantCount = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const consonants = new Set('bcdfghjklmnpqrstvwxyz');
    for (let char of str) {
        if (vowels.has(char)) {
            vowelCount++;
        } else if (consonants.has(char)) {
            consonantCount++;
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}
let exampleString = "hashadbit";

let counts = countVowelsAndConsonants(exampleString);
console.log(`Number of vowels: ${counts.vowels}`);
console.log(`Number of consonants: ${counts.consonants}`);
