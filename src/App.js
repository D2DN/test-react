import React, {Component} from 'react';
import './App.css';

import {Route, Switch, Link} from 'react-router-dom';
import {PageHeader} from 'react-bootstrap'

import TravelShow from 'components/TravelShow';
import TravelIndex from 'components/TravelIndex';
import TravelNew from 'components/TravelNew';
import ReadMe from 'components/ReadMe';

class App extends Component {
    constructor() {
        super();
        this.state = {
            activeTabs: 1
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedKey) {
        this.setState({activeTabs: Number(selectedKey)});
    };

    render() {
        return (
            <div>
                <PageHeader>
                    Travel book
                </PageHeader>
                <div className="menu-navigation">
                    <Link to="/">Documentation</Link>
                    <Link to="/travel">Live Demo</Link>
                </div>
                <Switch>
                    <Route path="/travel/new" component={TravelNew}/>
                    <Route path="/travel/:id" component={TravelShow}/>
                    <Route path="/travel" component={TravelIndex}/>
                    <Route path="/" component={ReadMe}/>
                </Switch>
            </div>
        );
    }
}

export default App;
