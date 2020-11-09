import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("Class button clicked")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>CLick ME</button>
            </div>
        )
    }
}

export default ClassClick
