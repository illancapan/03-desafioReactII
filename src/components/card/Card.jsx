const Card = ({ pokemon }) => {
  console.log('Datos del pokmon:', pokemon);

  if (!pokemon || !pokemon.stats || !pokemon.type) {
    return <div>Error: No se ha seleccionado un pokemon</div>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h3>Nombre: {pokemon.name}</h3>
        <img src={pokemon.img} alt={pokemon.name} />
        <h4>Stats:</h4>
        <ul>
          {pokemon.stats.map((stat, index) => (
            <li key={index}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
        <h4>Tipo:</h4>
        <ul>
          {pokemon.type.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
