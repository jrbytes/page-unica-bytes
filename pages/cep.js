import { useState } from "react"
import cep from 'cep-promise'

function Cep() {
  const [cepData, setCepData] = useState(null)
  const [data, setData] = useState({})

  function handleCep(e) {
    setCepData(e)
  }

  async function pesquisar() {
    const response = await cep(cepData)
    setData(response)
  }
  
  return (
    <div>
      <input
        type="text"
        placeholder="Insira um CEP"
        onChange={e => handleCep(e.target.value)}
      />
      <input onClick={pesquisar} type="submit" />

      <h1>Informações do CEP:</h1>
      <p>
        CEP: {data.cep} <br />
        Cidade: {data.city} <br />
        Estado: {data.state} <br />
        Rua: {data.street} <br />
        Bairro: {data.neighborhood}
      </p>
    </div>
  )
}

export default Cep