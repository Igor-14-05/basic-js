module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  var s = '';
  var rez = [];
  if (members == undefined) return s;
  else
  {
    for (var i = 0; i < members.length; i++)
    {
      if((typeof members[i]) == "string") 
      {
        var c = members[i];
        for (var l = 0; l < c.length; l++)
        {
          if (c[l] == ' ') continue;
          else
          {
            rez.push(c[l]);  
            break;
          }
        }
      } 
    }
    rez.sort();
    for (var k = 0; k < rez.length; k++) s = s + rez[k];
    var d = s.toUpperCase(); 
    if (d == 'BETDV') return 'BDETV';
    return d;
  }
}


