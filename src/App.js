import React from 'react';
import TodoItem from './components/TodoItem';
import todosData from './JSON/todosJSON';
// import productsData from "./JSON/productsJSON";
// import Product from "./components/Product";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: todosData,
            isLoading: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id, event) {
        // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
        // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. 
        //(Think how you might use the `.map` method to do this)
        let updatedTodosData = this.state.todos.map(item => {
            if (item.id === id) {
                //item.completed = !item.completed; ---NEVER MODIFY STATE DIRECTLY!
                //console.log(event.target.checked);
    
                return Object.assign({...item}, {completed: !item.completed});
            }
            //console.log(id);
            return item;
        });
        //event.target.classList.toggle("todo-done", event.target.checked);
        //console.log(this.state.todos[0]);
        this.setState({todos: updatedTodosData});
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} changefunc={this.handleChange} />);
    
        return (
            <div className="todo-list">
                {this.state.isLoading ? 
                <img alt ="loading gif" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" /> : 
                todoItems}
                
            </div>
            );
    
    }    
}


export default App;






// function App() {
//   const todosComponents = todosData.map((item) => {
//       return <TodoItem key={item.id} todo={item} />
//   });  
    
//   return (
//     <div className="todo-list">
//         {todosComponents}        
//     </div>
//   )
// }