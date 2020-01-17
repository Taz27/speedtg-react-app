import React from "react"

const UserContext = React.createContext();
const {Provider, Consumer} = UserContext;

class UserContextProvider extends React.Component {
    state = {
        username: "Honey Singh"
    };

    changeUser = (newUser) => {
        this.setState({username: newUser});
    }

    render() {
        return (
            <Provider value={{username: this.state.username, changeUser: this.changeUser}}>
                {this.props.children}
            </Provider>
        );
    }


}

export {UserContextProvider, Consumer as UserContextConsumer}