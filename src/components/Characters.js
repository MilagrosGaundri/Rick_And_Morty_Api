import React, {useState, useEffect} from 'react'

const Characters = () => {

    const [character, setCharacter] = useState([])

    useEffect(() => {
        
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacter(data.results))
    }, []);

    return(
        <div className="container">
            <div className="characters">
                {
                    character.map(item =>(
                        <div className="box" key={item.id}>
                            <img src={item.image} alt={item.name}/>
                            <div className="character">
                                <h3 className="name">Nombre: {item.name}</h3>
                                <p className="specie">Especie: {item.species}</p>
                                <p className="status">Estado: {item.status}</p>
                                <p className="status">Genero: {item.gender}</p>
                                <p className="status">Origen: {item.origin.name}</p>
                                <p className="status">Localización: {item.location.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Characters