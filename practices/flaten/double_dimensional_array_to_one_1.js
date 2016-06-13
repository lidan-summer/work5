'use strict';

function double_to_one(collection) {

  collection = (collection + "").split(",");
  var arr_double_to_one = [0];
  var arr_item = 0;

  for(var i = 0; i < collection.length; i++){
    arr_double_to_one[arr_item] = parseInt(collection[i]);

    arr_item++;
  }

  return arr_double_to_one;
}

module.exports = double_to_one;
