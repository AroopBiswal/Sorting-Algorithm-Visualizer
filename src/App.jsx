import "./App.css";
import quickSort from "./Algorithms/QuickSort";
import React from "react";

export default class App extends React.Component {
    values = [1, 2, 3, 4, 5];

    constructor(props) {
        super(props);
        this.state = {
            array: [],
            speed: { min: 1, max: 5 },
        };
    }
    handleInputChange = (e) => {
        this.setState({ speed: e.currentTarget.value });
    };

    randomizeArray() {
        var max = 500;
        var min = 1;
        const array = [];
        for (let i = 0; i < 100; i++) {
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
            <div id="mainDiv">
                <br></br>
                <div>
                    <div class="title">Sorting Algorithm Visualizer</div>
                    <div class="speed">
                        <p>Speed</p>
                        <input
                            onInput={this.handleInputChange}
                            type="range"
                            min="0"
                            value={this.state.speed}
                            max="4"
                            step="1"
                            list="tick-list"
                        />
                    </div>
                    <div class="algorithmPanel">
                        <button
                            class="algorithmButton"
                            onClick={() => this.randomizeArray()}
                        >
                            Generate New Array{" "}
                        </button>
                        <button
                            class="algorithmButton"
                            onClick={() => this.quickSort()}
                        >
                            Quick Sort
                        </button>
                        <button
                            class="algorithmButton"
                            onClick={() => this.bubbleSort()}
                        >
                            Bubble Sort
                        </button>
                        <button
                            class="algorithmButton"
                            onClick={() => this.mergeSort()}
                        >
                            Merge Sort
                        </button>
                        <button
                            class="algorithmButton"
                            onClick={() => this.insertionSort()}
                        >
                            Insertion Sort
                        </button>
                        <button
                            class="algorithmButton"
                            onClick={() => this.selectionSort()}
                        >
                            Selection Sort
                        </button>
                        <button
                            class="algorithmButton"
                            onClick={() => this.heapSort()}
                        >
                            Heap Sort
                        </button>
                    </div>
                    {/* {&nbsp},
            {&nbsp}, */}
                    {/* <span style={{padding: 300}}> </span> */}
                </div>
                <div class="playPanel">
                    <button onClick={() => this.randomizeArray()}>
                        Beginning
                    </button>
                    <button onClick={() => this.randomizeArray()}>Back</button>
                    <button onClick={() => this.randomizeArray()}>Pause</button>
                    <button onClick={() => this.randomizeArray()}>Play</button>
                    <button onClick={() => this.randomizeArray()}>Next</button>
                    <button onClick={() => this.randomizeArray()}>End</button>
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
            </div>
        );
    }
}
