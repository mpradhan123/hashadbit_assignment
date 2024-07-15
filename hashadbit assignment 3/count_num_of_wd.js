function countWords(paragraph) {
    paragraph = paragraph.trim();
    
    let words = paragraph.split(/\s+/);
    return words.length;
}
let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
let wordCount = countWords(paragraph);
console.log(`Number of words in the paragraph: ${wordCount}`);
