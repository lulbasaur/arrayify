exports.evalArray = function (arr) {
    console.log('ok')
    arr = arr.split(',')
    if (Array.isArray(arr)) {
      let arrUpper = arr.map(item => item.toUpperCase() );
      if (arrUpper.includes('FOO') || arrUpper.includes('BAR')) {
        return  true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
};
