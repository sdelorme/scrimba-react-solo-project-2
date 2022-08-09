import React from "react"
import Header from "./Components/Header"
import Card from "./Components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(card => {
        return (
            <Card 
                key={card.id}
                card={card}
            />
        )
    })
    console.log(cards)
    
    return (
        <div>
            <Header />
            <section>
                {cards}
            </section>
        </div>
    )
}