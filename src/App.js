import React from 'react';
import './App.css';
import Figure from "./Figure";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            figureUrls: [
                "https://web.cse.ohio-state.edu/~chen.8028/VisPubImages/Images/1990/new/VisC.45.5.png",
                "https://web.cse.ohio-state.edu/~chen.8028/VisPubImages/Images/1990/new/VisC.45.6.png",
                "https://web.cse.ohio-state.edu/~chen.8028/VisPubImages/Images/1990/new/VisC.51.6.png",
                "https://web.cse.ohio-state.edu/~chen.8028/VisPubImages/Images/1990/new/VisC.45.7.png",
                "https://web.cse.ohio-state.edu/~chen.8028/VisPubImages/Images/1990/new/VisC.6.5.png"
            ],
            currentFigureIndex: 0
        };
        this.changeFigure = this.changeFigure.bind(this);
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
        return (
            <div className="App">
                <button onClick={() => this.changeFigure(false)}>Previous</button>
                <Figure imgUrl={this.state.figureUrls[this.state.currentFigureIndex]}/>
                <button onClick={() => this.changeFigure(true)}>Next</button>
            </div>
        );
    }
}

export default App;
