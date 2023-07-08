module.exports = {
    wordFrequency: function(doc, word){
        let wordsArray = this.stringToWordsArray(doc);        
        let counter = 0;

        for (let i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i].toLowerCase() === word.toLowerCase()) {
                counter++;
             }
        } 
        return counter;
    },


    wordSentences: function(doc, word){
        let wordsArray = this.stringToWordsArray(doc);     
        const frasesWithWords = [];
        let actualFrase = '';
        let newFrase = true;

        for (let i = 0; i < wordsArray.length; i++) {
            const char = wordsArray[i];

         if (newFrase) {
            if (char.match(/[A-ZÀ-ÖØ-Ý]/i)) {
                newFrase = false;
                actualFrase = char;
            }     
        } 
        else 
        {
            actualFrase += char;

            if (char === '.' || char === ':' || char === ';' || char === '\n') {

            const palavras = actualFrase.trim().toLowerCase().split(' ');
                if (palavras.includes(word.toLowerCase())) {
                    frasesWithWords.push(actualFrase.trim());
     }

        newFrase = true;
        fraseAtual = '';
      }
    }
  }

    return frasesWithWords;
},


    topWords: function(doc, count, minWordLength){
        let wordsArray = this.stringToWordsArray(doc);     
        const cleanText = wordsArray.toLowerCase().replace(/[^a-z ]/g, '');

        const words = cleanText.split(' ');

        const wordCount = {};
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (word.length >= minWordLength) {
                if (wordCount[word]) {
                    wordCount[word]++;
                } 
                else 
                {
                    wordCount[word] = 1;
                }
             }   
        }

        // Converter o objeto em um array de pares [palavra, contagem]
        const wordCountArray = Object.entries(wordCount);

        // Ordenar o array pelo número de ocorrências (decrescente)
        for (let i = 0; i < wordCountArray.length - 1; i++) {
            for (let j = i + 1; j < wordCountArray.length; j++) {
                if (wordCountArray[i][1] < wordCountArray[j][1]) {
                    [wordCountArray[i], wordCountArray[j]] = [wordCountArray[j], wordCountArray[i]];
                }
            }
        }

        // Retornar as palavras mais utilizadas
        return wordCountArray.slice(0, count).map(pair => pair[0]);
    },

    stringToWordsArray: function(text) {
        return text.match(/[a-zÀ-ú]+/gmui);
    }
}

