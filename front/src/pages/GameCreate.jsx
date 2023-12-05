import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JudgeCreate = () => {

  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [members, setMembers] = useState('')
  const [edition, setEdition] = useState('')
  const [total_score, setTotal_score] = useState(0)
  const navigate = useNavigate()

  const handleFormSubmit = (e) =>{
    e.preventDefault()

    fetch('http://localhost:2023/api/juegos', {
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({name, genre, members, edition, total_score})
    })
    .then((res)=>res.json())
    .then((result)=>{
      console.log(result)
      navigate('/GameCreate', {replace: true})
    })
  }

  return (
    <div className='crearJuego'>
      <h2>Crear Juego</h2>
      {/* Display list of games here */}
      <p>¡ Juegos en competencia dentro de la Goto Game Jam !</p>

      <div className="contenedorForm">
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              Nombre:
              <input type="text" required onChange={(e) => setName(e.target.value)} value={name} />
            </label>
          </div>
          <div>
            <label>
              Género:
              <input type="text" required onChange={(e) => setGenre(e.target.value)} value={genre} />
            </label>
          </div>
          <div>
            <label>
              Miembros:
              <input type="text" required onChange={(e) => setMembers(e.target.value)} value={members} />
            </label>
          </div>
          <div>
            <label>
              Edición:
              <input type="text" required onChange={(e) => setEdition(e.target.value)} value={edition} />
            </label>
          </div>

          <button type="submit">Enviar</button>
        </form>
        </div>

    </div>
  );
};

export default JudgeCreate;

// Nombre, genero, miembros, edicion, votos totales