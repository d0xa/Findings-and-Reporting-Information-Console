import React, {Component} from 'react';
import ReactDOM from "react-dom";
import TabDisplay from '../bootstrap/FRIC_gui_tabs.js';

import MainNav from '../bootstrap/FRIC_gui_navbar.js';

export default class Main extends Component {
    render() {
        return(
        ReactDOM.render(
            <container>
            <div>
                <MainNav />
                    <body>
                        <h2> Welcome to F.R.I.C.</h2>

                        <TabDisplay />
                    </body>
            </div>
            </container>, document.getElementById('FRIC'))
        );

    }
}