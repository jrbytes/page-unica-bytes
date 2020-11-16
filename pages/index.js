import { useState } from 'react'

function Home() {
  const [contador, setContador] = useState(0)

  function somar() {
    setContador(contador + 1)
  }

  return (
    <>
      <p>Hello world, incremento {contador}</p>
      <button onClick={somar}>Incrementar número</button>
    </>
  )
}

export default Home