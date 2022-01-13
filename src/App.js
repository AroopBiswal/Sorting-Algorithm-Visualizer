import React from "react";
import "./App.css";

//Algorithms
import bubbleSort from "./Algorithms/BubbleSort.js";
//import quickSort from "./Algorithms/QuickSort";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            compared: [],
            sorted: [],
            speed: 100,
            size: 100,
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
            const [j, k, tempArray, index] = visualization[i];
            setTimeout(() => {
                this.setState({ compared: [j, k] });
                this.setState({ swapped: [] });
                if (index !== null) {
                    this.setState({ sorted: this.state.sorted.concat(index) });
                }

                if (tempArray !== null) {
                    this.setState({ array: tempArray });
                    //this.setState({ swapped: [j, k] });
                }

                if (i >= visualization.length - 1) {
                    this.setState({ sorting: false });
                    this.setState({ completed: true });
                }

            }, i * Math.ceil(300 / this.state.speed));
        }
    }

    bubbleSort() {
        this.visualize(bubbleSort(this.state.array));
    }

    render() {
        const array = this.state.array;
        return (
            <div>
                <div className="menuContainer">
                    <div className="title">Sorting Algorithm Visualizer</div>
                    <div className="speedText">Speed</div>
                    <input
                        disabled={this.state.sorting}
                        className="speedBar"
                        style={{ width: "300px" }}
                        onChange={this.handleSpeed}
                        type="range"
                        min={1}
                        max={100}
                        value={this.state.speed}
                    />
                    <div className="sizeText">Size</div>
                    <input
                        disabled={this.state.sorting}
                        className="sizeBar"
                        type="range"
                        min={10}
                        max={100}
                        onChange={this.handleSize}
                        value={this.state.size}
                        style={{ width: "300px" }}
                    />
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
                        onClick={() => this.randomizeArray()}
                    >
                        Selection Sort
                    </button>
                    <button
                        disabled={this.state.sorting || this.state.completed}
                        className="button"
                        onClick={() => this.mergeSort()}
                    >
                        Insertion Sort
                    </button>
                    <button
                        disabled={this.state.sorting || this.state.completed}
                        className="button"
                        onClick={() => this.insertionSort()}
                    >
                        Heap Sort
                    </button>
                    <button
                        disabled={this.state.sorting || this.state.completed}
                        className="button"
                        onClick={() => this.selectionSort()}
                    >
                        Merge Sort
                    </button>
                    <button
                        disabled={this.state.sorting || this.state.completed}
                        className="button"
                        onClick={() => this.heapSort()}
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
