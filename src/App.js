import "./App.css";
import quickSort from "./Algorithms/QuickSort";
import React from "react";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            speed: { min: 1, max: 10 },
            size: 100,
        };
    }
    handleSpeed = (e) => {
        this.setState({ speed: e.currentTarget.value });
    };

    handleSize = (e) => {
        this.setState({ size: e.currentTarget.value });
        this.randomizeArray();
    };

    randomizeArray() {
        var max = 500;
        var min = 1;
        const array = [];
        for (let i = 0; i < this.state.size; i++) {
            array.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
        this.setState({ array });
    }

    componentDidMount() {
        this.randomizeArray();
    }

    quickSort() {
        var array = this.state.array;
        array = quickSort(array);
        this.setState({ array });

        const arrayBars = document.getElementsByClassName("arrayBar");
        const barOneStyle = arrayBars[5].style;
        barOneStyle.backgroundColor = "red";
    }

    bubbleSort() {}

    mergeSort() {}

    insertionSort() {}

    selectionSort() {}

    heapSort() {}

    render() {
        const { array } = this.state;
        //console.log("Randomized Array");
        return (
            <body>
                <div className="menuContainer">
                    <div class="title">Sorting Algorithm Visualizer</div>
                    <div className="speedText">Speed</div>
                    <input
                        className="speedBar"
                        style={{ width: "300px" }}
                        onInput={this.handleSpeed}
                        type="range"
                        min="1"
                        max="5"
                        step="1"
                        value={this.state.speed}
                    />
                    <div className="sizeText">Size</div>
                    <input
                        className="sizeBar"
                        style={{ width: "300px" }}
                        onInput={this.handleSize}
                        type="range"
                        min="10"
                        max="100"
                        step="1"
                        value={this.state.size}
                    />
                    <div className="buttons">
                        <button
                            class="button"
                            onClick={() => this.randomizeArray()}
                        >
                            Generate New Array
                        </button>
                        <button class="button" onClick={() => this.quickSort()}>
                            Quick Sort
                        </button>
                        <button
                            class="button"
                            onClick={() => this.bubbleSort()}
                        >
                            Bubble Sort
                        </button>
                        <button class="button" onClick={() => this.mergeSort()}>
                            Merge Sort
                        </button>
                        <button
                            class="button"
                            onClick={() => this.insertionSort()}
                        >
                            Insertion Sort
                        </button>
                        <button
                            class="button"
                            onClick={() => this.selectionSort()}
                        >
                            Selection Sort
                        </button>
                        <button class="button" onClick={() => this.heapSort()}>
                            Heap Sort
                        </button>
                    </div>
                </div>

                <div id="arrayContainer" className="arrayContainer">
                    {array.map((value, index) => (
                        <div
                            className="arrayBar"
                            key={index}
                            style={{ height: value }}
                        ></div>
                    ))}
                </div>
            </body>
        );
    }
}
