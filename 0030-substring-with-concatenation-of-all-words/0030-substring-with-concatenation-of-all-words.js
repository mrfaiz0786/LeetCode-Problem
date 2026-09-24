/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s || !words || words.length === 0) return [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;

    const wordMap = new Map();
    for (let word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    const result = [];

    // Sliding window for each offset
    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        let currentMap = new Map();
        let count = 0;

        while (right + wordLen <= s.length) {
            let word = s.substring(right, right + wordLen);
            right += wordLen;

            if (wordMap.has(word)) {
                currentMap.set(word, (currentMap.get(word) || 0) + 1);
                count++;

                // If frequency exceeded, shrink window
                while (currentMap.get(word) > wordMap.get(word)) {
                    let leftWord = s.substring(left, left + wordLen);
                    currentMap.set(leftWord, currentMap.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }

                // Valid window
                if (count === wordCount) {
                    result.push(left);
                }

            } else {
                // Reset
                currentMap.clear();
                count = 0;
                left = right;
            }
        }
    }

    return result;
};