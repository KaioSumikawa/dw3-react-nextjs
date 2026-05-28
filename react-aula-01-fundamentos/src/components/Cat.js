const Cat = (props) => {
    return (
    <>
    <div>
        <p>O nome do gato é: {props.nome}</p>
        <p>A raça do gato é: {props.raca}</p>
        <p>A idade do gato é: {props.idade} anos.</p>
        <p>O nome do dono é: {props.dono}</p>
    </div>
    </>
    )
}

export default Cat;