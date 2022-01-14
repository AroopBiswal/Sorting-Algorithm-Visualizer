import swap from "./Helper";

export default function heapSort(array) {
    const duplicate = array.slice();
    const visualization = [];

    function heapSortHelper(size, i) {
        //i represents the index of the parent node
        let largest = i;
        // Represents the index of the left and right child nodes
        let lChild = 2 * i + 1;
        let rChild = 2 * i + 2;

        //Checks if left child node is bigger than the parent node
        if (lChild < size)
        visualization.push([lChild, largest, null, null]);
        if (lChild < size && duplicate[lChild] > duplicate[largest]) {
            largest = lChild;
        }
        if (rChild < size)
        visualization.push([rChild, largest, null, null]);
        if (rChild < size && duplicate[rChild] > duplicate[largest]) {
            largest = rChild;
        }

        // visualization.push([largest, i, null, null]);
        if (largest !== i) {
            visualization.push([largest, i, null, null]);
            swap(duplicate, largest, i);
            visualization.push([largest, i, duplicate.slice(), null]);
            heapSortHelper(size, largest);
        }
    }

    for (let i = Math.floor(duplicate.length / 2) - 1; i >= 0; i--) {
        heapSortHelper(duplicate.length, i);
    }

    for (let i = duplicate.length - 1; i > 0; i--) {
        visualization.push([0, i, null, null]);
        swap(duplicate, 0, i);
        visualization.push([0, i, duplicate.slice(), null]);
        visualization.push([null, null, null, i]);
        heapSortHelper(i, 0);
    }
    visualization.push([null, null, null, 0]);
    console.log(visualization)
    return visualization;
}
