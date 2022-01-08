import './SortingAlgorithmVisualizer.css';
import React from 'react';

export default class SortingAlgorithmVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    randomizeArray() {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(Math.floor(Math.random() * (100 - 1 + 1) + 1));
            //console.log(Math.floor(Math.random() * (100 - 1 + 1) + 1));
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
            <>
            {(array.map((value, index) => (
                    <div className="array-bar" keys={index}>
                        {value}</div>
                )))}
            </>
        );
    }
}