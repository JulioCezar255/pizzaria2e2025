
  
  const Formulario = ()=>{

    import { useState } from "react"
 
function App(){
 
  const [nome, setNome] = useState('Ronaldo')
  const [idade, setIdade] = useState(18)
  const [time, setTime] = useState('Santos FC')
  const [pi] = useState(3.14)

    return (
    <div>
      <input 
    className = "nome"
    onChange={(e)=>{setNome(e.target.value)}}
    type="text" />

    <button
      className="botao"
      onClick={()=>{alert(nome)}}
    >
      CLIQUE AQUI
    </button>
    </div>
    )
  }


  return (
    <div>
      <h3>Pizzaria 2E</h3>

      <Formulario nome="Maria" sombra = "Digite sua idade.../>
      <Formulario nome="Tomas" sombra = "Digite um time..."/>
      <Formulario nome="Marlon" sombra = "Valor de pi"/>
      <Formulario />
      <Formulario />
      <Formulario />
      
    </div>
  )
}

export default App