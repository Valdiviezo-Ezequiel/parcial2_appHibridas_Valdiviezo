import React from 'react';

const Votes = () => {
  return (
    <div className='votoJuez'>
        <h2>¡Bienvenido señor/a Juez!</h2>

        {/* <form onSubmit={this.handleSubmit}> */}
        <div className="contenedorForm">
        <form>
            <label>
            Name:
            <input type="text" name="name" value="" onChange="" />
            </label>
            <br />
            <label>
            Genre:
            <input type="text" name="genre" value="" onChange="" />
            </label>
            <br />
            <label>
            Members:
            <input type="text" name="members" value="" onChange="" />
            </label>
            <br />
            <label>
            Edition:
            <input type="number" name="edition" value="" onChange="" />
            </label>
            <br />
            <button type="submit">Enviar</button>
        </form>
        </div>
    </div>
  );
};

export default Votes;
