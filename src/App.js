import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Projects } from './pages';
import './style.css'
import {NavBarRight} from './components'
import { useTheme } from './context/Theme';


const App = () => {
    const theme = useTheme();
    return (
        <main  className={theme.current.color}>
            <NavBarRight/>
            <Switch>
                {/*<Route path = '/about/:action?'>
                    <About/>
                </Route>*/}
                <Route path = '/projects/:project?'>
                    <Projects/>
                </Route>
                <Route path = '/'>
                    <Home/>
                </Route>
            </Switch>
        </main>
    )
}

export default App;