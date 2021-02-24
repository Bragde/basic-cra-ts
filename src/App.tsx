import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Users } from './components/users/Users';
import { Home } from './components/Home';
import { About } from './components/About';
import { Subroutes } from './components/Subroutes';
import { Switch, Route } from 'react-router-dom';
import { PageNotFound } from './components/PageNotFound';
import { NavBar } from './components/NavBar';
import { Props } from './components/Props';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <NavBar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/crud" component={Users} />
                <Route path="/subroutes" component={Subroutes} />
                <Route
                    path="/props"
                    render={() => {
                        return <Props text="This text is passed as a property when routing to this component" />;
                    }}
                />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
