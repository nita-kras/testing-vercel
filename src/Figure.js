import React from "react";

class Figure extends React.Component {
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
    }

    render() {
        return (
            <img src={this.state.figureUrls[this.state.currentFigureIndex]} alt={"Figure"}/>
        );
    }
}

export default Figure;