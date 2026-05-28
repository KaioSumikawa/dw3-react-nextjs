// Importando o hook useState
import { useState } from "react";

const Contador = () => {
    // Estado:
    // count: identificador do estado
    // setCount: função que altera o estado
    // useState(0): valor inicial do estado
    const [count, setCount] = useState(0);

    // Variáveis não renderizam o componente
    let numero = 0;
    console.log(numero)


    return (
        <>
            <div>
                <br />
                <p>Contador: {count}</p>
                <button onClick={() => setCount(count + 1)}>Aumentar</button>
                <button onClick={() => setCount(count - 1)}>Diminuir</button>
                <button onClick={() => setCount(0)}>Zerar</button>
            </div>
        </>
    )
}

export default Contador;