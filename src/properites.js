import React, { Component } from 'react'

export class Properites extends Component {
    render() {
        return (
            <>
                  <h2>{this.props.title}</h2>
                <img src={this.props.Url} alt={this.props.alt} title={this.props.title}  />
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default Properites
