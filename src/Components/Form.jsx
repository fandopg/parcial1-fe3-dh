import { useState } from "react"
import Card from "./Card"

const Form = () => {

    const [lector, setLector] = useState({
        name:"",
        book:""
    })
    const [valido, setValido] = useState(false)
    const [error, setError] = useState(false)


    const handleSubmit = (e) => {
      e.preventDefault()
      if (lector.name.length >= 3 && !lector.name.startsWith(" ") && lector.book.length >= 6){
        setValido(true)
        setError(false)       
      } else {
        setError(true)
        setValido(false)
      }
    }
  return (
    <div>
        {valido ? <Card lector={lector}/> : 
            <form onSubmit={handleSubmit}>
            <h2>Cual es tu libro favorito?</h2>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" id="name" onChange={(e) => setLector({...lector,name:e.target.value})} />
            <label htmlFor="book">Tu libro favorito:</label>
            <input type="text" name="book" id="book" onChange={(e) => setLector({...lector,book:e.target.value})} />
            <input type="submit" value="Enviar"/>   
        </form>}
        {error && <p className="error">Por favor chequea que la información sea correcta</p>}
    </div>
  )
}

export default Form