import React from 'react';

const Contact = (props) =>
{
    setTimeout(() =>{
        console.log(props)
        props.history.push('./')
    },2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem epsum</p>

        </div>
    )
}

export default Contact