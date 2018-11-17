const Adagrams = {
  drawLetters() {
    const letterPool = [
      "A", "A", "A", "A", "A", "A", "A", "A", "A",
      "B", "B",
      "C", "C",
      "D", "D", "D", "D",
      "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
      "F", "F",
      "G", "G", "G",
      "H", "H",
      "I", "I", "I", "I", "I", "I", "I", "I", "I",
      "J",
      "K",
      "L", "L", "L", "L",
      "M", "M",
      "N", "N", "N", "N", "N", "N",
      "O", "O", "O", "O", "O", "O", "O", "O",
      "P", "P",
      "Q",
      "R", "R", "R", "R", "R", "R",
      "S", "S", "S", "S",
      "T", "T", "T", "T", "T", "T",
      "U", "U", "U", "U",
      "V", "V",
      "W", "W",
      "X",
      "Y", "Y",
      "Z"
    ];

    const playerHand = [];

    for ( let i = 0; i < 10; i += 1) {
      const randomIndex = Math.floor(Math.random() * letterPool.length);

      const randomLetter = letterPool[randomIndex];

      const addToHand = () => {
        return playerHand.push(randomLetter)
      };

      const removeLetter = () => {
        return letterPool.splice(randomIndex, 1)
      };

      addToHand();
      removeLetter();
    }

    return playerHand;
  },

  usesAvailableLetters(word, drawn) {
    const wordArray = word.toUpperCase().split('');
    const letterHashObj = new Object();
    let output = true

    drawn.forEach(function (letter) {
      if (letterHashObj[letter]) {
        letterHashObj[letter] += 1;
      }
      else {
        letterHashObj[letter] = 1;
      }
    });


    wordArray.forEach(function (letter) {
      if (letterHashObj[letter]) {
        if (letterHashObj[letter] < 1 ) {
          output = false;
        }
        else {
          letterHashObj[letter] -= 1;
        }
      }
      else {
        output = false;
      }
  });

  return output;
  },

  scoreWord(word) {
    let wordScore = 0;
    const letterScores = {
      1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
      2: ["D", "G"],
      3: ["B", "C", "M", "P"],
      4: ["F", "H", "V", "W", "Y"],
      5: ["K"],
      8: ["J", "X"],
      10: ["Q", "Z"]
    };

    const wordArray = word.toUpperCase().split('');

    wordArray.forEach(function (letter) {
      for (let score in letterScores) {
        if (letterScores[score].includes(letter)){
          wordScore += parseInt(score);
        }
      }
    });

    if (wordArray.length >= 7) {
      wordScore += 8;
    }

    return wordScore;
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;
