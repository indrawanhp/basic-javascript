// Password Generator

// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

// Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

function changeVocals(str) {
  const vowelMap = {
    a: "b",
    i: "j",
    u: "v",
    e: "f",
    o: "p",
    A: "B",
    I: "J",
    U: "V",
    E: "F",
    O: "P",
  };

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (vowelMap[str[i]]) {
      result += vowelMap[str[i]];
    } else {
      result += str[i];
    }
  }

  return result;
}

function reverseWord(str) {
  return str.split("").reverse().join("");
}

function setLowerUpperCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}

function removeSpaces(str) {
  return str.split(" ").join("");
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }

  let changedVowels = changeVocals(name);
  let reversed = reverseWord(changedVowels);
  let lowerUpper = setLowerUpperCase(reversed);
  let result = removeSpaces(lowerUpper);

  return result;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
