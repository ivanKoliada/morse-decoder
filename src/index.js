const MORSE_TABLE = {
   '.-': 'a',
   '-...': 'b',
   '-.-.': 'c',
   '-..': 'd',
   '.': 'e',
   '..-.': 'f',
   '--.': 'g',
   '....': 'h',
   '..': 'i',
   '.---': 'j',
   '-.-': 'k',
   '.-..': 'l',
   '--': 'm',
   '-.': 'n',
   '---': 'o',
   '.--.': 'p',
   '--.-': 'q',
   '.-.': 'r',
   '...': 's',
   '-': 't',
   '..-': 'u',
   '...-': 'v',
   '.--': 'w',
   '-..-': 'x',
   '-.--': 'y',
   '--..': 'z',
   '.----': '1',
   '..---': '2',
   '...--': '3',
   '....-': '4',
   '.....': '5',
   '-....': '6',
   '--...': '7',
   '---..': '8',
   '----.': '9',
   '-----': '0',
   ' ': ' ',
};


function decode(expr) {
   let newStr = expr.match(/.{1,10}/g) + '',
      newArr = newStr.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '').replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ').split(','),
      result = [];
   for (let i = 0; i < newArr.length; i++) {
      for (let j in MORSE_TABLE) {
         if (newArr[i] === j) {
            result.push(MORSE_TABLE[j]);
         }
      }
   }

   return result.join('');
}

module.exports = {
   decode
}






