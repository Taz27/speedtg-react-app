import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class TravelForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            isVeg: false,
            isHinduMeal: false,
            isHalal: false
        };
        this.handleChange = this.handleChange.bind(this);
        //console.log(this);
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value});    
    }
    
    render() {
        
        let dietArray = [];
        dietArray.push(this.state.isVeg ? "Vegetarian" : undefined);
        dietArray.push(this.state.isHalal ? "Halal Food" : undefined);
        dietArray.push(this.state.isHinduMeal ? "Hindu Meal" : undefined);
        //console.log(dietArray);
        let filteredArr = dietArray.filter((item) => item);
        //console.log(filteredArr);
        let dietText = "";

        if (filteredArr.length > 1) {
            filteredArr.forEach((item, index, arr) => {
                if (index === (arr.length-1)) {
                    dietText += item + ".";     
                } else {
                    dietText += item + ", ";     
                }
            });
        } else {
            dietText = filteredArr[0];
        }
        
        
        
        return (
            <main>
                <form>
                    <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange} /><br />
                    <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} /><br />
                    <input type="number" value={this.state.age} name="age" onChange={this.handleChange} placeholder="Age" /><br />
                    
                    <fieldset style={{width: 130}}>
                    <legend>Gender: </legend>
                    Male: <input type="radio" checked={this.state.gender === "male"} name="gender" onChange={this.handleChange} value="male" /><br />
                    
                    Female: <input type="radio" checked={this.state.gender === "female"} name="gender" onChange={this.handleChange} value="female" />
                    </fieldset>
                
                    <label>Destination:  </label>
                    <select value={this.state.location} 
                    name="location" onChange={this.handleChange}>
                        <option value="">--Please Choose Destination--</option>
                        <option value="las vegas">Las Vegas</option>
                        <option value="new york">New York</option>
                        <option value="london">London</option>
                    </select>
                    <fieldset style={{width: 130}}>
                    <legend>Dietary Restrictions: </legend>
                    Veg: <input type="checkbox" checked={this.state.isVeg} name="isVeg" onChange={this.handleChange} /><br />
                    Halal: <input type="checkbox" checked={this.state.isHalal} name="isHalal" onChange={this.handleChange} /><br />
                    Hindu Meal: <input type="checkbox" checked={this.state.isHinduMeal} name="isHinduMeal" onChange={this.handleChange} /><br />
                    </fieldset>
                    
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {`${this.state.firstName} ${this.state.lastName}`} </p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: {dietText}
                    
                </p>
            </main>
        )
    }
}

export default TravelForm
