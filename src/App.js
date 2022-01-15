import React from "react";
//import InputRange from 'react-input-range';
import "./App.css";

//Algorithms
import bubbleSort from "./Algorithms/BubbleSort.js";
import selectionSort from "./Algorithms/SelectionSort.js"
import insertionSort from "./Algorithms/InsertionSort.js"
import heapSort from "./Algorithms/HeapSort.js";
import mergeSort from "./Algorithms/MergeSort.js";
import quickSort from "./Algorithms/QuickSort.js";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            compared: [],
            sorted: [],
            swapped: [],
            speed: 50,
            size: 100,
            // speed: { min: 1, max: 100},
            // size: { min: 10, max: 100},
            sorting: false,
            completed: false,
        };
    }

    //Speed Change
    handleSpeed = (speed) => {
        this.setState({ speed: speed.currentTarget.value });
    };

    //Size Change
    handleSize = (size) => {
        this.setState({ size: size.currentTarget.value });
        this.randomizeArray();
    };

    //Create random array of size state.size and assign it to state.array
    randomizeArray() {
        var max = 500;
        var min = 1;
        this.setState({ sorting: false });
        this.setState({ completed: false });
        this.setState({sorted: []});
        this.setState({swapped: []});
        this.setState({compared: []});
        const tempArray = [];
        for (let i = 0; i < this.state.size; i++) {
            tempArray.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
        this.setState({ array: tempArray });
    }

    //When site reloads
    componentDidMount() {
        this.randomizeArray();
    }

    /*Function that updates array, compared/swapped, and sorted state arrays after setTimeout() experies per loop
    The array.map((value, index) in arrayContainer will then generate the bars based on if they are in compared/swapped, or sorted
    If value at index is in compared/swapped, the bar color is light coral
    If value at index is in sorted, the bar color is light green
    Otherwise, the bar color is light blue*/
    visualize(visualization) {
        this.setState({ sorting: true });
        for (let i = 0; i < visualization.length; i++) {
            const [j, k, tempArray, completedIndex] = visualization[i];
            setTimeout(() => {
                this.setState({ compared: [j, k] });
                this.setState({ swapped: [] });
                if (completedIndex !== null) {
                    this.setState({ sorted: this.state.sorted.concat(completedIndex) });
                }

                if (tempArray !== null) {
                    this.setState({ array: tempArray });
                    this.setState({ swapped: [j, k] });
                }

                if (i >= visualization.length - 1) {
                    this.setState({ sorting: false });
                    this.setState({ completed: true });
                }

            }, i * Math.ceil(1000 / this.state.speed));
        }
    }

    bubbleSort() {
        this.visualize(bubbleSort(this.state.array));
    }

    selectionSort() {
        this.visualize(selectionSort(this.state.array));
    }

    insertionSort() {
        this.visualize(insertionSort(this.state.array));
    }

    heapSort() {
        this.visualize(heapSort(this.state.array));
    }

    mergeSort() {
        this.visualize(mergeSort(this.state.array));
    }

    quickSort() {
        this.visualize(quickSort(this.state.array));
    }


    render() {
        const array = this.state.array;
        return (
            <div>
                <div className="menuContainer">
                    <div className="title">Sorting Algorithm Visualizer</div>
                    <div className="barContainer">
                    <div className="speedText">Speed</div>
                    <input
                        disabled={this.state.sorting}
                        className="speedBar"
                        style={{ width: "300px" }}
                        onChange={this.handleSpeed}
                        type="range"
                        min={1}
                        max={50}
                        value={this.state.speed}></input>
                    <div className="sizeText">Size</div>
                    <input
                        disabled={this.state.sorting}
                        className="sizeBar"
                        type="range"
                        min={10}
                        max={100}
                        onChange={this.handleSize}
                        value={this.state.size}
                        style={{ width: "300px" }}></input>
                    </div>
                    <button
                        disabled={this.state.sorting}
                        className="button"
                        onClick={() => this.randomizeArray()}
                    >
                        Randomize
                    </button>
                    <button
                        disabled={this.state.sorting || this.state.completed}
                        className="button"
                        onClick={() => this.bubbleSort()}
                    >
                        Bubble Sort
                    </button>
                    <button
                        disabled={this.state.sorting || this.state.completed}
                        className="button"
                        onClick={() => this.selectionSort()}
                    >
                        Selection Sort
                    </button>
                    <button
                        disabled={this.state.sorting || this.state.completed}
                        className="button"
                        onClick={() => this.insertionSort()}
                    >
                        Insertion Sort
                    </button>
                    <button
                        disabled={this.state.sorting || this.state.completed}
                        className="button"
                        onClick={() => this.heapSort()}
                    >
                        Heap Sort
                    </button>
                    <button
                        disabled={this.state.sorting || this.state.completed}
                        className="button"
                        onClick={() => this.mergeSort()}
                    >
                        Merge Sort
                    </button>
                    <button
                        disabled={this.state.sorting || this.state.completed}
                        className="button"
                        onClick={() => this.quickSort()}
                    >
                        Quick Sort
                    </button>
                </div>

                <div id="arrayContainer" className="arrayContainer">
                    {array.map((value, index) => {
                        let color = "lightblue";
                        if(this.state.compared && (index === this.state.compared[0] || index === this.state.compared[1])) {
                            color = "lightcoral";
                        }
                        if(this.state.swapped && (index === this.state.swapped[0] || index === this.state.swapped[1])) {
                            color = "lightcoral";
                        }
                        if(this.state.sorted && this.state.sorted.includes(index)) {
                            color = "lightgreen";
                        }
                        return (<div
                            className="arrayBar"
                            key={index}
                            style={{ height: value, width: 12, backgroundColor: color}}
                        ></div>)
                    })}
                </div>
            </div>
        );
    }
}
