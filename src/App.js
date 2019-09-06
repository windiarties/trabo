import React from 'react'
import { Switch} from 'react-router-dom'
import Dashboard from './components/dashboard'

class App extends React.Component {
    render() {
        return (
            <Switch >
                <Dashboard />
            </Switch>
        )
    }
}

export default App
