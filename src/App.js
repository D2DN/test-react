import React, {Component} from 'react';
import './App.css';

import {Route, Switch, Link} from 'react-router-dom';
import {PageHeader, Nav, NavItem} from 'react-bootstrap'

import TravelShow from './components/travel_show';
import TravelIndex from './components/travel_index';
import TravelNew from './components/travel_new';
import ReadMe from "./components/readMe";

class App extends Component {

    constructor() {
        super();
        this.state = {
            activeTabs: 1
        }
    }

    handleSelect(selectedKey) {
        debugger
        this.setState({activeTabs: Number(selectedKey)});
        //this.props.history.push(selectedKey);
    };

    render() {
        const {activeTabs} = this.state;
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
                    <Route path='/travel/new' component={TravelNew}/>
                    <Route path='/travel/:id' component={TravelShow}/>
                    <Route path='/travel' component={TravelIndex}/>
                    <Route path='/' component={ReadMe}/>
                </Switch>
            </div>

        );
    }
}

export default App;
