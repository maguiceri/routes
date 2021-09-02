import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Card';
import "./styles.scss";

function Carrousel (props){
const [items, setItems] = useState([])

        async function fetchData(){
        const getData = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=buzos&limit=5`);
        console.log(getData)
        setItems(getData.data.results)

        }
    
        useEffect(() => {
            fetchData()
        } , [])

    return(
        <>
        {items.filter((item)=>{
        return item.title.toLowerCase().includes(props.inputValue.toLowerCase())
      }).map((item, key)=>{
        return <Card item={item} key={item.id? item.id : key}/>
      })}
        </>
    )
}

export default Carrousel;