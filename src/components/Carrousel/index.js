import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Card';
import "./styles.scss";

function Carrousel (){
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
        <div className="carrousel">
            {items.map((name,key)=>
            {
                return(<Card name={name} key={key}/>)
            })}
        </div>
    )
}

export default Carrousel;