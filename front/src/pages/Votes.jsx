import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Votes = () => {

  const [games, setGames] = useState([])

  const juez_id =  localStorage.getItem('id');
  //console.log(juez_id)
  // const juegoID = selectedUser.name

  const [jugabilidad, setJugabilidad] = useState('')
  const [arte, setArte] = useState('')
  const [sonido, setSonido] = useState('')
  const [afinidad, setAfinidad] = useState('')

  const [selectedGame, setSelectedGame] = useState(null);
  const navigate = useNavigate()

  useEffect(()=>{
    fetch('http://localhost:2023/api/juegos/lista',{
      method: 'GET',
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    })
    .then((response) =>{
      if(response.ok){
        return response.json()
      }
      else if(response.status == 401){
        navigate('/login', {replace: true})
        return {}
      }
    })
    .then((data) =>{
      setGames(data)
    })  

    return ()=>{
      console.log("Se ejecuta cuando se desmonta el componente")
    }

  }, []) // ejecuta solamente cuando se monta el componente


    const handleVote = (game) => {
      setSelectedGame(game);
      // setEmail(game.email);
      // setRol(game.rol);
    };

    const handleCancelVote = () => {
      setSelectedGame(null);
      // Limpiar los campos del formulario cuando se cancela la edición
      // setEmail('');
      // setRol('');
    };

    const handleFormSubmit = (e) =>{
      e.preventDefault()
      console.log(JSON.stringify({juez_id, juego_id:selectedGame._id, jugabilidad, arte, sonido, afinidad}))
    fetch('http://localhost:2023/api/jueces/votar', {
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({juez_id, juego_id:selectedGame._id, jugabilidad, arte, sonido, afinidad})
    })
    .then((res)=>res.json())
    .then((result)=>{
      console.log(result)
      navigate('/Votes', {replace: true})
      })
    }


  return (
    <div className='votoJuez'>
        <h2>¡Bienvenido señor/a Juez!</h2>
        <p>Seleccione un juego para votar</p>

        <tbody>
            {games.map(game => (
              <tr key={game._id} className="cardJuego">
                <td>{game.name}</td>
                <td><button class="update-button" onClick={() => handleVote(game)}>Votar</button></td>
              </tr>
            ))}
        </tbody>


        {selectedGame && (
        <form onSubmit={handleFormSubmit}>
            <h3>Votar: {selectedGame.name}</h3>
            <div>
              <label>
                Jugabilidad:
                <input type="text" required onChange={(e) => setJugabilidad(e.target.value)} value={jugabilidad} />
              </label>
            </div>
            <div>
              <label>
                Arte:
                <input type="text" required onChange={(e) => setArte(e.target.value)} value={arte} />
              </label>
            </div>
            <div>
              <label>
                Sonido:
                <input type="text" required onChange={(e) => setSonido(e.target.value)} value={sonido} />
              </label>
            </div>
            <div>
              <label>
                Afinidad:
                <input type="text" required onChange={(e) => setAfinidad(e.target.value)} value={afinidad} />
              </label>
            </div>

            <button type="submit">Votar</button>
            <button type="button" onClick={handleCancelVote}>
              Cancelar Edición
            </button>
        </form>
        )}
        
    </div>
  );
};

export default Votes;
