const Dog = ({ nome, raca, idade }) => {
    return (
        // Fragment
    <>
    <div>
        <p>O nome do cachorro é: {nome}</p>
        <p>A raça do cachorro é: {raca}</p>
        <p>A idade do cachorro é: {idade} anos.</p>
    </div>
    </>
    )
}

export default Dog;