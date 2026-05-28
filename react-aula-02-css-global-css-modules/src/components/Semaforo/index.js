import styles from "@/components/Semaforo/Semaforo.module.css";
//Importando o hook useState
import { useState } from "react";

const Semaforo = () => {
  //Criando o estado para controlar as cores
  const [cor, setCor] = useState("cinza");

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f0f0f0",
        }}
      >
        <h3 style={{ marginTop: "30px", color: "#000" }}>Semáforo em React</h3>
        <br />
        {/* Exemplo de classe externa */}
        <div className={`${styles.luz} ${cor=="vermelha" ? styles.vermelha : styles.cinza}`}></div>
        <div className={`${styles.luz} ${cor=="amarela" ? styles.amarela : styles.cinza}`}></div>
        <div className={`${styles.luz} ${cor=="verde" ? styles.verde : styles.cinza}`}></div>
        <br />
        <div>
          {/* Classe global */}
          <button className="button" onClick={()=>setCor("vermelha")}>Pare!</button>
          <button className="button" onClick={()=>setCor("amarela")}>Atenção!</button>
          <button className="button" onClick={()=>setCor("verde")}>Prossiga!</button>
        </div>
      </div>
    </>
  );
};
export default Semaforo;
