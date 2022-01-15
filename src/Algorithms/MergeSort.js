import swap from "./Helper";


export default function mergeSort(array) {
    const visualization = [];
    const duplicate = array.slice()

    function mergeSortHelper(start, end) {
        if (start >= end) {
            return;
        }

        let mid = Math.floor((start + end) / 2);

        mergeSortHelper(start, mid);
        mergeSortHelper(mid + 1, end);

        merge(start, mid, end);
    }

    function merge(start, mid, end) {
        const temp = [];
        let leftIndex = start;
        let rightIndex = mid+1;

        while(leftIndex <= mid && rightIndex <= end) {
            visualization.push([leftIndex, rightIndex, null, null]);
            if(duplicate[leftIndex] < duplicate[rightIndex]) {
                temp.push(duplicate[leftIndex]);
                visualization.push([leftIndex, null, null, null]);
                leftIndex++;
            }
            else {
                temp.push(duplicate[rightIndex]);
                visualization.push([rightIndex, null, null, null]);
                rightIndex++;
            }
        }

        while(leftIndex <= mid) {
            visualization.push([leftIndex, null, null, null]);
            temp.push(duplicate[leftIndex]);
            leftIndex++;
        }

        while(rightIndex <= end) {
            visualization.push([rightIndex, null, null, null]);
            temp.push(duplicate[rightIndex]);
            rightIndex++;
        }

        for (let i = start; i <= end; i++) {
            duplicate[i] = temp[i - start];
            visualization.push([i, null, duplicate.slice(), null]);
        }

    }

    //main
    mergeSortHelper(0, duplicate.length - 1);

    for(let i = 0; i < duplicate.length; i++) {
        visualization.push([null, null, null, i]);
    }

    return visualization;
    

}




// function mergeSortHelper(leftContainer, rightContainer) {
    //     let tempArray = [];
    //     left = leftContainer[0];
    //     leftIndex = leftContainer[1];
    //     right = rightContainer[0];
    //     rightIndex = rightContaienr[1];

    //     // Merges left and right array in order from least to greatest
    //     while(left.length != 0 && right.length != 0) {
    //         visualization.push([leftIndex, rightIndex, null, null])
    //         if(duplicate[left] > duplicate[right]) {
                
    //             tempArray.push(right.splice(0,1));
    //         }
    //         else {

    //         }

    //     }
        
    // }

    // function mergeSortMain(array, arrayIndex) {

    //     // Base case
    //     if(array.length < 2) {
    //         return [array, arrayIndex];
    //     }
    //     // Splits the array roughly in half into two arrays
    //     let left = duplicate.slice(0, array.length/2);
    //     let right = duplicate.slice(array.length/2, array.length);

    //     return mergeSortHelper(mergeSortMain(left, 0), mergeSortMain(right, array.length/2));
    // }