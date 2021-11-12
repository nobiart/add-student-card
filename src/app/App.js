import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './layouts/form';
import Main from './layouts/main';

function App() {
    return (
        <Switch>
            <Route path="/student" component={Form} />
            <Route path="/" component={Main} />
        </Switch>
    );
}

export default App;
