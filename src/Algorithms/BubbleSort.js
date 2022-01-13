import swap from "./Helper";

export default function bubbleSort(array) {
    const duplicate = array.slice();
    const visualizaion = [];

    for (var i = 0; i < duplicate.length; i++) {
        for (var j = 0; j < duplicate.length - i - 1; j++) {
            visualizaion.push([j, j + 1, null, null])
            if (duplicate[j] > duplicate[j + 1]) {
                swap(duplicate, j, j + 1);
                visualizaion.push([j, j + 1, duplicate.slice(), null]);
            }
        }
        visualizaion.push([null, null, null, j])
    }
    return visualizaion;
};
