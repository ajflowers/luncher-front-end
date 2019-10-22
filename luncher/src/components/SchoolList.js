import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 1rem;
 margin: 5% auto;
 width: 25%;
 height: 300px;
 background-color: #F8F8F8;
 opacity: 0.7;
 border: 1px solid black;
 border-radius: 10px;
`;

const H1 = styled.h1`
font-size: 1.9rem;
font-weight: 400;
`;

const P = styled.p`
font-size: 1rem;
`;

const ActionButton = styled.button`
 margin: 0 5px;
 padding: 8px 14px;
 background: #74B9FF;
 cursor: pointer;
 border: 1px solid black;
 outline: 0;
 font-weight: 800;
 border-radius; 10px;
 :hover {
     opacity: 0.8
 }
 ${props => (props.type === 'needed') ? `background: #74B9FF` : null}
 ${props => (props.type === 'raised') ? `background: #FFFA7A` : null}
 ${props => (props.type === 'donate') ? `background: #FFAD72` : null}
 `;

const SchoolList = props => {

    return (
        <>
            {props.schoolList.map((school, index) => {
                return (
                    <Card key={index}>
                        <H1>{school.schoolName}</H1>
                        <P>{school.address}</P>
                        <P>{school.city}, {school.state}. {school.zip}</P>
                        <ActionButton type='needed'>{school.fundsNeeded} Funds Needed</ActionButton>
                        <ActionButton type='raised'>{school.fundsRaised} Funds Raised</ActionButton>
                        <br />
                        <ActionButton type='donate'>Donate To {school.schoolName}</ActionButton>
                        <br />
                    </Card>
                )
            })}
        </>
    );

};

export default SchoolList;