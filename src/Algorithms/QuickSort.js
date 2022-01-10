function quickSort(array) 
{
    let length = array.length;
    if (length <= 1) 
    { 
        return array;
    }
    var leftArray = [];
    var rightArray = [];
    var pivotIndex = Math.floor(length/2);
    var pivot = array[pivotIndex];
    

    for (var i = 0; i < length; i++)
    {
        if(i != pivotIndex)
        {
            
            if (array[i] < pivot)
            {
                leftArray.push(array[i]);
            }
            else
            {
                rightArray.push(array[i]);
            }
        }
    }

    return quickSort(leftArray).concat(pivot, quickSort(rightArray));
}

export default quickSort;