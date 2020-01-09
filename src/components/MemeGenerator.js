import React from 'react';

class MemeGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
            isLoading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(res => {
            //console.log(res.data.memes);
            this.setState({isLoading: false, allMemeImgs: res.data.memes});
        });
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randMemeImg = this.state.allMemeImgs[randNum].url;
        this.setState({ randomImg: randMemeImg});
    }

    render() {
        const myMainDiv = <div>
                                <form className="meme-form" onSubmit={this.handleSubmit}>
                                    <input 
                                        type="text" 
                                        value={this.state.topText} 
                                        name="topText"
                                        placeholder="Top Text" 
                                        onChange={this.handleChange} 
                                    />
                                    <input 
                                        type="text" 
                                        value={this.state.bottomText} 
                                        name="bottomText"
                                        placeholder="Bottom Text" 
                                        onChange={this.handleChange} 
                                    />
                                <button>Gen</button>
                                </form>
                                <div className="meme">
                                    <img src={this.state.randomImg} alt="meme" />
                                    <h2 className="top">{this.state.topText}</h2>
                                    <h2 className="bottom">{this.state.bottomText}</h2>
                                </div>
                          </div>
        return (
            <div>
                {this.state.isLoading ? 
                <div style={{maxWidth: 500, margin: "0 auto"}}>
                    <img src="https://media.giphy.com/media/MDrmyLuEV8XFOe7lU6/giphy.gif" alt="loading_gif" />
                </div> : myMainDiv}    
            </div>
        );
    }
}

export default MemeGenerator;