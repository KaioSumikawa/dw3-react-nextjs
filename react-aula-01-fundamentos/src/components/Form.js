import { useState } from "react";

const Form = () => {
    // Criando os estados
        const [nome, setNome] = useState("");
        const [sobrenome, setSobrenome] = useState("");
        const [email, setEmail] = useState("");

        // Criando a função de submit do formulário
        const handleSubmit = (event) => {
            event.preventDefault(); // Evita que a página seja recarregada ao enviar o formulário
            // Aqui os dados serão enviados
            console.log("Nome:", nome);
            console.log("Sobrenome:", sobrenome);
            console.log("Email:", email);
        }
        
        return (
        <>
            <br />
            <h1>Formulário de Cadastro</h1>
            {// Quando o valor do input mudar, pegue o novo valor (e.target.value) e atualize o estado correspondente usando a função setEstado}
            }
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Insira o seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <br />
                <input type="text" placeholder="Insira o seu sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}/>
                <br />
                <input type="email" placeholder="Insira o seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>  
                <br />
                <button type="submit">Enviar</button>
            </form>
            <br />
            <p>Nome: {nome}</p>
            <p>Sobrenome: {sobrenome}</p>
            <p>Email: {email}</p>
            
        </>
    )
}

export default Form