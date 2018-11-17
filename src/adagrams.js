const Adagrams = {
  drawLetters() {
    const letter_pool = [
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

    const player_hand = [];

    for ( let i = 0; i < 10; i += 1) {
      const random_index = Math.floor(Math.random() * letter_pool.length);

      const random_letter = letter_pool[random_index];

      const add_to_hand = () => {
        return player_hand.push(random_letter)
      };

      const remove_letter = () => {
        return letter_pool.splice(random_index, 1)
      };

      add_to_hand();
      remove_letter();
    }

    return player_hand;
  },

  usesAvailableLetters(word, drawn) {
    const word_array = word.toUpperCase().split('');
    const letter_hash_obj = new Object();
    let output = true

    drawn.forEach(function (letter) {
      if (letter_hash_obj[letter]) {
        letter_hash_obj[letter] += 1;
      }
      else {
        letter_hash_obj[letter] = 1;
      }
    });


    word_array.forEach(function (letter) {
      if (letter_hash_obj[letter]) {
        if (letter_hash_obj[letter] < 1 ) {
          output = false;
        }
        else {
          letter_hash_obj[letter] -= 1;
        }
      }
      else {
        output = false;
      }
  });

  return output;
  },


};

// Do not remove this line or your tests will break!
export default Adagrams;
