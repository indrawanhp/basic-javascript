// Mengelompokkan Hewan

// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string.
// Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya.
// Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

// Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

function groupAnimals(animals) {
  let sorts = [];

  for (let i = 0; i < animals.length; i++) {
    let prefix = animals[i][0];

    if (sorts.indexOf(prefix) == -1) {
      sorts.push(prefix);
    }
  }
  sorts.sort()

  let out = [];

  for(let i = 0; i < sorts.length; i++) {
    let letter = sorts[i];
    let subArray = [];

    for(let j = 0; j < animals.length; j++) {
      if(letter == animals[j][0]){
        subArray.push(animals[j])
      }
    }

    out.push(subArray);
  }
  return out;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
