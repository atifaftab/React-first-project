import React from 'react'

// function Greet(){
//     return <h1><b>ATIF</b></h1>
// }

const Greet = (props) => {
//const Greet = ({name, heroName }) => {
// const {name, heroName} = props
    console.log(props)
    return (
        <div><h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
}
export default Greet