function index(array, n){
    if (n < array.length && n >= 0) {
        let num = Math.pow(array[n],n);
      return num
    }
    return -1;
  }