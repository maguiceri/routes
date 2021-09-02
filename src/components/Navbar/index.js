import React from 'react'

function Navbar (props){

    function handleCallBack(e){
        props.handleCallBack(e.target.value)
    }

    return(
        <div className="navbar">
            <input className="input" onChange={handleCallBack}></input>
        </div>
    )
}

export default Navbar