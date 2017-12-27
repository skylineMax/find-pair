function mixx(arr) {
      var i, valueI;
      for (var k = 0; k <= arr.length - 1; k++) {
          for (var j = 0; j <= arr[k].length - 1; j++) {
              i = Math.floor(Math.random() * (j+1));
              valueI = arr[k][i];
              arr[k][i] = arr[k][j];
              arr[k][j] = valueI;
          }
      }
      return arr;
    }

export default mixx;