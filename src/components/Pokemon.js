import React from 'react'

function Pokemon({ pokemon }){
    console.log(pokemon)
    return(
        <div className="pokemon">
            <div className="pokemon__name">
                {pokemon.name}
            </div>
            <div className="pokemon__image">
                <img src={pokemon.image} />
            </div>
            <div className="pokemon__meta">
                <span className="meta">Max CP-{pokemon.maxCP}</span> 
                <span className="meta">Max HP-{pokemon.maxHP}</span>
            </div>
            <div className="pokemon__attacks">
                {pokemon.attacks.special.map(attack => <span className="attack">{attack.name}</span>)}
            </div>
        </div>
    )
}

export default Pokemon