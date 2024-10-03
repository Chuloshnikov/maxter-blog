export function generateRandomWords(count: number) {
    const words = [];
    const characters = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < count; i++) {
        let wordLength = Math.floor(Math.random() * 8) + 3; 
        let word = '';

        for (let j = 0; j < wordLength; j++) {
            word += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        words.push(word);
    }

    return words.join(' '); 
}