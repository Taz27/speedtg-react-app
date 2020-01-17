import React from "react"

import Header from "./components/Header"
import { UserContextConsumer } from "./userContext"

class App extends React.Component {
    state = {
        username: ""
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    
    render() {
        return (
            <div>
                <Header />
                <main>
                    <UserContextConsumer>
                        {context => (
                            <p className="main">No new notifications, {context.username}! 🎉</p>
                        )}
                    </UserContextConsumer>
                </main>
                
                {
                    /**
                     * Challenge: Add the ability for the user to choose a new username
                     * 
                     * 1. Add state to this component to hold the new username in a controlled form
                     * (https://reactjs.org/docs/forms.html#controlled-components)
                     * (https://scrimba.com/p/p7P5Hd/cW8Jdfy)
                     * 
                     * 2. Change userContext into a component that has state and provides the ability
                     * to change the user's username. Make sure to export the provider and consumer
                     * as named exports and update their uses anywhere else in the app
                     * 
                     * 3. Give this App component the ability to update the username in context when the
                     * button is clicked
                     */
                }
                <input
                    type="text"
                    name="username"
                    placeholder="New username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <UserContextConsumer>
                    {context => <button onClick={() => context.changeUser(this.state.username)}>Change Username</button>}
                </UserContextConsumer>
                
                
            </div>
        )
    }
    
}

export default App