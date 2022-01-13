function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

export default function bubbleSort(array) {
    console.log("bubbleSort");
    const duplicate = array.slice();
    const visualizaion = [];

    for (var i = 0; i < duplicate.length; i++) {
        for (var j = 0; j < duplicate.length - i - 1; j++) {
            visualizaion.push([j, j + 1, null, null])
            if (duplicate[j] > duplicate[j + 1]) {
                swap(duplicate, j, j + 1);
                duplicate.push([j, j + 1, duplicate.slice(), null]);
            }
        }
    }
    return visualizaion;
};
