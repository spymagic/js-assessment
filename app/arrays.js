exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    var total = 0;
    for (var i in arr) {
      total += arr[i];

    }
    return total;
  },

  remove: function(arr, item) {
    var list = [];
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      if (arr[i] != item) {
        list.push(arr[i]);
      }
    }
    return list;
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr, item) {
    arr.shift(arr, item);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);

  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    let dic = {};
    let dupes = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      dic[arr[i]] = dic[arr[i]] ? dic[arr[i]] + 1 : 1;
    }

    for (let item in dic) {
      if (dic.hasOwnProperty(item) && dic[item] > 1) {
        dupes.push(Number(item));
      }
    }
    return dupes;
  },

  square: function(arr) {
    let len = arr.length;
    let list = [];
    for (let i = 0; i < len; i++) {
      list.push(arr[i] * arr[i]);
    }

    return list;
  },

  findAllOccurrences: function(arr, target) {
    let list = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (arr[i] === target) {
        list.push(i);
      }
    }
    return list;
  }
};