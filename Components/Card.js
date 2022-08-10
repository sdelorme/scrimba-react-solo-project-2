import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`${props.card.imageUrl}`} />
            <div className="card--content">
                <span className="card--pin"><img src="../images/pin.png" /></span>
                <span className="card--location">{props.card.location} </span>
                <span className="card--link"><a href={`${props.card.googleMapsUrl}`}>View on Google Maps</a></span>
                <h1>{props.card.title}</h1>
                <p className="card--dates">
                    <span>{props.card.startDate} - </span>
                    <span>{props.card.endDate}</span>
                </p>
                <p className="card--description">{props.card.description}</p>
            </div>
        </div>
    )
}