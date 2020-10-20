import React from "react"
import ReactDOM from "react-dom";

import Windbnb from './component/Windbnb'

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <Windbnb />
            </div>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById('root'));