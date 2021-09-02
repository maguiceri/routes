import React, {useState} from 'react'
import Navbar from "../../components/Navbar"
import Carrousel from "../../components/Carrousel"

function Market(){
const [inputValue, setInputValue] = useState('')

    function handleCallBack(inputValue){
        setInputValue(inputValue)
    }
  
    return(
        <>
        <Navbar handleCallBack={handleCallBack}/>
        <Carrousel inputValue={inputValue}/>
        </>
    )
}

export default Market