import swap from "./Helper";

export default function selectionSort(array) {
    const duplicate = array.slice();
    const visualizaion = [];

    for (let i = 0; i < duplicate.length; i++) {
        for (let j = i + 1; j < duplicate.length; j++) {
            visualizaion.push([i, j, null, null]);

            if (duplicate[j] < duplicate[i]) {
                swap(duplicate, i, j);
                visualizaion.push([i, j, duplicate.slice(), null]);
            }
        }
        visualizaion.push([null, null, null, i]);
    }

    return visualizaion;
}