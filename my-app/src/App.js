import React, {useState, useEffect } from "react";
import CharacterCard from "./CharacterCard"
import "./App.css";
import axios from "axios";
import styled from "styled-components"

const Redh1 = styled.h1`
text-align: center;
text-shadow: 1px 1px #eeba30;
font-size: 5em;
font-family: Cantarell;
`;

const Carddiv = styled.div`
margin: 5%;
display: flex;
flex-direction: column;
justify-content: space-apart;
`;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get('http://hp-api.herokuapp.com/api/characters')
    .then(response => {
        console.log(response.data);
        setData(response.data);
    })
    .catch(error => {
      console.log("data was not returned", error);
    });
    
  }, []);
  return ( 
    
    <div>
    <Redh1>The Characters of Hogwarts</Redh1>
    <Carddiv>{data.map((data, index) => {
  
      return <CharacterCard
      key={data}
      name={data.name}
      actor={data.actor}
      house={data.house}
      dateOfBirth={data.dateOfBirth}
      ancestry={data.ancestry}
      eyeColour={data.eyeColour}
      hairColour={data.hairColour}
      image={data.image}
      />  
  })} </Carddiv> 
    </div>
  );
}

export default App;
