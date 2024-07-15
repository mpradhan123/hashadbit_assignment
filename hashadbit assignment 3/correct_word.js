function correctfn(string, wrong, correct) {
    const regex = new RegExp(wrong, 'g');
    const correctedString = string.replace(regex, correct);
    return correctedString;
}
let sentence = "I love my contrie. My contrie is beautiful.";
let wrongWord = "contrie";
let correctWord = "country";

let correctedSentence = correctfn(sentence, wrongWord, correctWord);
console.log(correctedSentence);
