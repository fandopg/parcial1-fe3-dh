import imagenLibro from "../assets/libro.jpg"
const Card = ({lector:{name, book}}) => {
  
  return (
    <div>
      <img src={imagenLibro} alt="imagen libro" width="300" />
      <h2>Hola {name}</h2>
      <h3>Registramos: "{book}" como tu libro favorito!</h3>
    </div>
  );
};

export default Card;
