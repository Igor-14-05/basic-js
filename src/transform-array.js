module.exports = function transform(arr) {
    // remove line with error and write your code here
    var arr1 = [];
    if(Array.isArray(arr))
    {
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[0] == "double-prev" || arr[0] == "discard-prev") continue;
        else
        {
            if (arr[i] == "discard-next")
            { 
                if (arr[i+1] == "discard-next") i = i + 2;
                else i = i + 1;
            }
            else if (arr[i] == "double-next")
            {
                if (arr[i+1] == "double-next")
                {
                    arr1.push(arr[i+2]);
                    arr1.push(arr[i+2]);
                    i = i + 1;
                }
                else
                {
                    arr1.push(arr[i+1]);
                    arr1.push(arr[i+1]);
                    i = i + 1;
                }
            }
            else
            {
                if (arr[i+1] == "discard-prev")
                {
                    i = i + 1;
                }
                else if (arr[i+1] == "double-prev")
                {
                    arr1.push(arr[i]);
                    arr1.push(arr[i]);
                    i = i + 1;
                }
                else arr1.push(arr[i]);
            }
        }   
    }
    return arr1;
    }
    else throw 'Not implemented';
};
