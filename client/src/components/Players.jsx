import React from "react";

const Players = props => {

    //console.log("hey",props.players)
    return(
        <>
            {props.players.map(player => (
                <div className="playerCard" key={player.id}>
                    <h2>#{player.id+1} {player.name}</h2>
                    <p>Country: {player.country}</p>
                    <p>Searches: {player.searches}</p>
                </div>
            ))}
        </>
    )
}

export default Players;