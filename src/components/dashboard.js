import React from 'react'
import Navbar from './navbar'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import UserPage from '../pages/UserPage'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div class='page-content'>
                    <div class='row'>
                        
                        <div class='col-md-9'>
                            <div class='row'>
                                <Switch>
                                    <Route exact path="/" component={HomePage} />
                                    <Route path="/:id" component={UserPage} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard