// Finds first object in array where name
// attribute matches a provided name
var findObjectByName = function(array, name) {
  var n = name;

  var found = config.modules.filter(function(item, n) {
    return item.name === name;
  });

  return found[0];
}
