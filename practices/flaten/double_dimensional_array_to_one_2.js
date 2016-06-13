'use strict';

function double_to_one(collection) {

  collection = (collection + "").split(",");
  var arr_double_to_one = [0];
  var arr_item = 0;
  var temp = [];
  var hash = {};

  for (var i = 0; i < collection.length; i++) {

    arr_double_to_one[arr_item] = parseInt(collection[i]);
    arr_item++;

  }
  
  for(var j=0, elem; (elem = arr_double_to_one[j]) != null; j++)  {
    if (!hash[elem])
    {
      temp.push(elem);
      hash[elem] = true;
    }
  }

  return temp;
}
  module.exports = double_to_one;

