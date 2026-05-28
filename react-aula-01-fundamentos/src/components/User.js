// Expressões JavaScript
// Como exibir variáveis JS dentro do HTML

const User = () => {
    // Devemos criar as variáveis dentro da função do componente
    const nome = "Felipe";
    return (
        <>
            <div>
                Bem vindo, {nome}!
            </div>
        </>
    )
}

export default User;