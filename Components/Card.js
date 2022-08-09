import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`${props.card.imageUrl}`} />
            <div className="card--content">
                <span><img src="../images/pin.png" /></span>
                <span>{props.card.location} </span>
                <span><a href={`${props.card.googleMapsUrl}`}>View on Google Maps</a></span>
                <p>{props.card.title}</p>
                <p>
                    <span>{props.card.startDate} - </span>
                    <span>{props.card.endDate}</span>
                </p>
                <p>{props.card.description}</p>
            </div>
        </div>
    )
}