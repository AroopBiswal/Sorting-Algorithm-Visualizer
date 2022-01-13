import React from "react";
import "./App.css";

//Algorithms
//import bubbleSort from "Algorithms/bubbleSort";
//import quickSort from "./Algorithms/QuickSort";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            speed: 5,
            size: 100,
            sorting: false,
            completed: false,
        };
    }
    handleSpeed = (speed) => {
        this.setState({ speed: speed.currentTarget.value });
    };

    handleSize = (size) => {
        this.setState({ size: size.currentTarget.value });
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

    render() {
        const { array } = this.state;
        //console.log("Randomized Array");
        return (
            <body>
                <div className="menuContainer">
                    <div class="title">Sorting Algorithm Visualizer</div>
                    <div className="speedText">Speed</div>
                    <input
                        disabled={this.state.sorting}
                        className="speedBar"
                        style={{ width: "300px" }}
                        onChange={this.handleSpeed}
                        type="range"
                        min={1}
                        max={5}
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
                    <div className="buttons">
                        <button
                            disabled={this.state.sorting}
                            class="button"
                            onClick={() => this.randomizeArray()}
                        >
                            Randomize
                        </button>
                        <button
                            disabled={
                                this.state.sorting || this.state.completed
                            }
                            class="button"
                            onClick={() => this.quickSort()}
                        >
                            Bubble Sort
                        </button>
                        <button
                            disabled={
                                this.state.sorting || this.state.completed
                            }
                            class="button"
                            onClick={() => this.bubbleSort()}
                        >
                            Selection Sort
                        </button>
                        <button
                            disabled={
                                this.state.sorting || this.state.completed
                            }
                            class="button"
                            onClick={() => this.mergeSort()}
                        >
                            Insertion Sort
                        </button>
                        <button
                            disabled={
                                this.state.sorting || this.state.completed
                            }
                            class="button"
                            onClick={() => this.insertionSort()}
                        >
                            Heap Sort
                        </button>
                        <button
                            disabled={
                                this.state.sorting || this.state.completed
                            }
                            class="button"
                            onClick={() => this.selectionSort()}
                        >
                            Merge Sort
                        </button>
                        <button
                            disabled={
                                this.state.sorting || this.state.completed
                            }
                            class="button"
                            onClick={() => this.heapSort()}
                        >
                            Quick Sort
                        </button>
                    </div>
                </div>

                <div id="arrayContainer" className="arrayContainer">
                    {array.map((value, index) => (
                        <div
                            className="arrayBar"
                            key={index}
                            style={{ height: value, width: 12 }}
                        ></div>
                    ))}
                </div>
            </body>
        );
    }
}
