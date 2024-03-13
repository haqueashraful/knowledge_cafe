import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Cards = ({handleBookMark, handleRead}) => {
    
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    

    return (
        <div className="  space-y-2">
            {
                cards.map((card, ind) => <Card card={card} key={ind} handleBookMark={handleBookMark} handleRead={handleRead} />)
            }
        </div>
    );
};

export default Cards;