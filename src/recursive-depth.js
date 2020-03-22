function summ(arr2,rez)
{
    for (var j = 0; j < arr2.length; j++)
            {
                if(Array.isArray(arr2[j]))  
                {
                    rez = rez + 1;
                    rez = summ(arr2[j],rez);
                }
            }
            console.log(rez);
            return rez;
}
module.exports = class DepthCalculator {
    calculateDepth(arr) {
        var rez = 1;
        for (var i = 0; i < arr.length; i++)
        {
            if(Array.isArray(arr[i])) 
            {
                rez = rez + 1;
                rez =summ(arr[i],rez);
            }
        }
        if (rez == 0) return 1;
        return rez;
    }
}