function quickSort(array) {
    animations = [];


    return quickSortHelper(array);
}


function quickSortHelper(array) 
{
    
    var pivotIndex = 0;
    var pivot = array[pivotIndex];
    let length = array.length;
    if (length <= 1) 
    { 
        return array;
    }
    var leftArray = [];
    var rightArray = [];
    

    for (var i = 1; i < length; i++)
    {
        if(i != pivotIndex)
        {
            
            if (array[i] < pivot)
            {
                leftArray.push(array[i]);
                animations.push([pivotIndex, i])
            }
            else
            {
                rightArray.push(array[i]);
            }
        }
    }

    return quickSortHelper(leftArray).concat(pivot, quickSort(rightArray));
}


//Old Quicksort Function
// function quickSort(array) 
// {
//     let length = array.length;
//     if (length <= 1) 
//     { 
//         return array;
//     }
//     var leftArray = [];
//     var rightArray = [];
//     var pivotIndex = Math.floor(length/2);
//     var pivot = array[pivotIndex];
    

//     for (var i = 0; i < length; i++)
//     {
//         if(i != pivotIndex)
//         {
            
//             if (array[i] < pivot)
//             {
//                 leftArray.push(array[i]);
//             }
//             else
//             {
//                 rightArray.push(array[i]);
//             }
//         }
//     }

//     return quickSort(leftArray).concat(pivot, quickSort(rightArray));
// }

export default quickSort;