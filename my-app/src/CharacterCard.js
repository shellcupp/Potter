import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
background-color: #d3a625;
display:flex;
justify-content: space-around;
align-items: center;
border: solid #eeba30 2px;
padding: 2%;
`;
const Firstdiv = styled.div`

`;
const Seconddiv = styled.div`

`;
const Redname = styled.h2`
color: 	#ae0001;
`;
const Imgsize = styled.img`
width: 200px;
`;


const CharacterCard = props => {
    const {key, name, species, gender, house, dateOfBirth} = props;

    return ([
        <WrapperDiv>
        <Firstdiv>
        <Redname>{props.name}</Redname>
        <h3>Actor: {props.actor}</h3>
        <strong>House: {props.house}</strong>
        <p>Birthday: {props.dateOfBirth}</p>
        <p>Ancestry: {props.ancestry}</p>
        <p>Eye Color: {props.eyeColour}</p>
        <p>Hair Color: {props.hairColour}</p>
        </Firstdiv>
        <Seconddiv>
        <Imgsize src={props.image} alt="This characters photo."/>
        </Seconddiv>
        </WrapperDiv>
    ])
}
export default CharacterCard;
