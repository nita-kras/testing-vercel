import React from 'react';
import './App.css';
import Figure from "./Figure";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            figures : [],
            currentFigureIndex: 0
        };
        this.changeFigure = this.changeFigure.bind(this);
    }

    componentDidMount() {
        fetch("http://corra.duckdns.org:26015/imageInfo.json")
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    figures: res
                })
            })
    }

    changeFigure(increment) {
        if (increment === true) {
            if (this.state.currentFigureIndex === 4) {
                this.setState({currentFigureIndex: 0});
            } else {
                this.setState({currentFigureIndex: this.state.currentFigureIndex + 1});
            }
        } else {
            if (this.state.currentFigureIndex === 0) {
                this.setState({currentFigureIndex: 4});
            } else {
                this.setState({currentFigureIndex: this.state.currentFigureIndex - 1});
            }
        }
    }

    render() {
        document.title = "Figure Viewer";
        console.log(this.state.figures["in"])
        return (
            <div className="App">
                <button className="buttons" onClick={() => this.changeFigure(false)}>Previous</button>
                <div className="Figure">
                    <p id={"figure-label"}>Figure {this.state.currentFigureIndex + 1}</p>
                </div>
                <button className="buttons" onClick={() => this.changeFigure(true)}>Next</button>
            </div>
        );
    }
}

export default App;
