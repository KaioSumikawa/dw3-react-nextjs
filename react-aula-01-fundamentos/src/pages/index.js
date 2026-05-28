import Cat from "@/components/Cat";
import Contador from "@/components/Contador";
import Descricao from "@/components/Descricao";
import Dog from "@/components/Dog";
import Form from "@/components/Form";
import MeuComponente from "@/components/MeuComponente";
import User from "@/components/User";

export default function Home() {
  return (
    <>
     <h1>Olá, mundo!</h1>
     <p>Bem-vindo ao meu primeiro site em react.</p>
     <br />
     <MeuComponente />
     <br />
     <User />
     <br />
     {/* Chamando o componente Descricao e passando dados externos para ele */}
     <Descricao cidade="Registro" idade={23} />
     <Cat nome="Mingal" raca="Siamês" idade={2} dono="Felipe" />

     {/* Desestruturação de props */}
     <Dog nome="Rex" raca="Pitbull" idade={3} dono="Maria" />
     <br />

     {/* Hook useState */}
     <Contador />

     <Form />
    </>
  );
}
