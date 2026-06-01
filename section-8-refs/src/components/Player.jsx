import { useState, useRef } from "react";

export default function Player() {

  const playerNameRef = useRef()

  const [playerName,setplayerName] = useState("")

  function handleSubmit(){
    setplayerName(playerNameRef.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome { playerName ??  "Unknown entity"} </h2>
      <p>
        <input ref={playerNameRef} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
