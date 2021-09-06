import React, { Component } from 'react'

export class HornedBeast extends Component {
    constructor(props){
        super(props);
        this.state={
           likes: 0
        };
    }
    numOfFav = ()=>{
    this.setState({
        likes : this.state.likes + 1
    })
}
   
    render() {
        return (
            <>
                          <h2>{this.props.title}</h2>
                         <img src={this.props.image_url} onClick={this.numOfFav} alt={this.props.keyword} title={this.props.title} width='500px' height='350px' />
                         <br/>
                         <img src={'https://www.pngfind.com/pngs/m/6-62455_instagram-heart-emoji-free-download-transparent-heart-symbol.png'} onClick={this.numOfFav} width='50px' height='40px' alt={this.props.keyword} />
                         <p> the number of “Likes” : {this.state.likes}</p>
                          <p>{this.props.description}</p>
                        
            </>
        )
    }
}

export default HornedBeast




