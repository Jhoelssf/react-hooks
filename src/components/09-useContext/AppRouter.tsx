import {HomeScreen} from './HomeScreen'
import {LoginScreen} from './LoginScreen'
import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {NavBar} from './NavBar'
import {AboutScreen} from './AboutScreen'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>

                <NavBar />

                <div className={'container'}>
                    <Switch>
                        <Route exact path={'/'} component={HomeScreen}/>
                        <Route path={'/about'} component={AboutScreen}/>
                        <Route path={'/login'} component={LoginScreen}/>
                        <Redirect to={'/'}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}
