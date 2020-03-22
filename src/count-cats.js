module.exports = function countCats(matrix) {
  // remove line with error and write your code here
  var rez = 0;
  for (var i = 0; i < matrix.length; i++)
  {
    var c  = matrix[i];
    for (var j = 0; j < c.length; j++)
    {
      if(c[j] == '^^') rez+=1;
    }
  }
  return rez;
};
