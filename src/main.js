export default function randomizeArray() {
    var max = 500;
    var min = 1;
    const array = [];
    for (let i = 0; i < this.state.size; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    this.setState({ array });
}
