import './SortingAlgorithmVisualizer.css';
import React from 'react';

export default class SortingAlgorithmVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
            // colorArray: [r1, g1, b1, r2, g2, b2]
        };
    }

    // randomizeColor() {
    //     var maxColor = 5;
    //     var min = 0;
    //     Math.floor(Math.random() * (maxColor - min + 1) + min));
    // }

    randomizeArray() {
        var max = 500;
        var min = 1;
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
        this.setState({ array });
        console.log("RANDOMIZE");
    }

    componentDidMount() {
        this.randomizeArray();
    }

    quickSort() {

    }
    
    bubbleSort() {

    }

    mergeSort() {
        
    }

    insertionSort() {

    }

    selectionSort() {

    }

    heapSort() {
        
    }

    render() {
        const { array } = this.state;
        //console.log("Randomized Array");
        return (
            <div id="mainDiv">
                <br></br>
            <div>
            <div class="title">
            Sorting Algorithm Visualizer
            </div>
            <div class="algorithmPanel">
            <button class="algorithmButton" onClick={() => this.randomizeArray()}>Generate New Array </button>
            <button class="algorithmButton" onClick={() => this.quickSort()}>Quick Sort</button>
            <button class="algorithmButton" onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button class="algorithmButton" onClick={() => this.mergeSort()}>Merge Sort</button>
            <button class="algorithmButton" onClick={() => this.insertionSort()}>Insertion Sort</button>
            <button class="algorithmButton" onClick={() => this.selectionSort()}>Selection Sort</button>
            <button class="algorithmButton" onClick={() => this.heapSort()}>Heap Sort</button>
            </div>
            {/* {&nbsp},
            {&nbsp}, */}
            {/* <span style={{padding: 300}}> </span> */}
            <div class = "speedPanel">
            <button onClick={() => this.randomizeArray()}>Speed</button>
            </div>
            
            <br></br>
            <br></br>
            </div>
            <div id="playPanel">
            <button onClick={() => this.randomizeArray()}>Beginning</button>
            <button onClick={() => this.randomizeArray()}>Back</button>
            <button onClick={() => this.randomizeArray()}>Pause</button>
            <button onClick={() => this.randomizeArray()}>Play</button>
            <button onClick={() => this.randomizeArray()}>Next</button>
            <button onClick={() => this.randomizeArray()}>End</button>
            </div>
            
            <div className="arrayContainer">
                
                {(array.map((value, index) => (
                    <div className="arrayBar" keys={index} style={{height: value}}>
                    </div>
                )))}
            </div>
            </div>
        );
    }
}