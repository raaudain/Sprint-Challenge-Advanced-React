import React from "react";

const Players = props => {

    console.log("hey",props.players)

    return(
        <>
            {props.players.map(player => (

                <div className="playerCard" key={player.id}>
                    <h1>#{player.id+1} {player.name}</h1>
                    <p>Country: {player.country}</p>
                    <p>Searches: {player.searches}</p>
                </div>
            ))}
            
        </>
    )
}

export default Players;