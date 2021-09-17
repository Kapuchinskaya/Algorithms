class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key); //вернет место в памяти для этого ключа
    //если место в памяти чистое - создаем массив для пары ключ-знач. если там уже что-то есть - повторяться не нужно
    if (!this.dataMap[index]) this.dataMap[index] = [];
    // вставляем значение
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    //так же как и в set, мы должны получить место для этого ключа в HT
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

let myHashTable = new HashTable();
myHashTable.set("bolts", 1400);
myHashTable.set("washers", 50);

//Hash Tables Interview Question
//два массива, есть ли у них общие элементы?
//идея решения - через объекты

function itemInCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true;
  }
  return false;
}

let array1 = [1, 3, 5];
let array2 = [2, 4, 5];

itemInCommon(array1, array2);
