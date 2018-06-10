exports.evalArray = function (arr) {
    arr = arr.split(',')
    if (Array.isArray(arr)) {
      let arrUpper = arr.map(item => item.toUpperCase() );
      if (arrUpper.includes('FOO') || arrUpper.includes('BAR')) {
        let obj = {
          "success" : true,
          "result": arr
        }
        return  obj;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
};
