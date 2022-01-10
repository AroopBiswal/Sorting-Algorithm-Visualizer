function quickSort(array, start, end) {
    if (start >= end)
    {
        return;
    }
    
    let index = quickSortHelper(array, start, end);
}


function quickSortHelper(array, start, end) 
{
    var pivotIndex = start;
    var pivot = array[pivotIndex];
    // let length = array.length;

    for (var i = start; i < end; i++)
    {
        if (array[i] < pivot)
        {
            swap(array, i, pivotIndex)
            pivotIndex++;
        }
    }
    swap(array, )

    return quickSortHelper(leftArray).concat(pivot, quickSort(rightArray));
}

function swap(array, index1, index2)
{
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
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