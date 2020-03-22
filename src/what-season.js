const month = {
  0 : 'winter',
  1 : 'winter',
  2 : 'spring',
  3 : 'spring',
  4 : 'spring',
  5 : 'summer',
  6 : 'summer',
  7 : 'summer',
  8 : 'autumn',
  9 : 'autumn',
  10 : 'autumn',
  11 : 'winter'
}
module.exports = function getSeason(date) {
  if (date == undefined) 
  {
    return 'Error';
  }
  var c = date.getMonth();
  return month[c];
};
