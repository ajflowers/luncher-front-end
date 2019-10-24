import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export const Card = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 20px;
 margin: 10px;
 width: 250px;
 height: 360px;
 background-color: #F8F8F8;
 opacity: 0.7;
 border: 1px solid black;
 border-radius: 10px;
`;

export const H1 = styled.h1`
font-size: 1.9rem;
font-weight: 400;
`;

export const P = styled.p`
font-size: 1rem;
`;

export const ActionButton = styled.button`
 margin: 0 5px;
 padding: 8px 14px;
 background: #74B9FF;
 cursor: pointer;
 border: 1px solid black;
 outline: 0;
 font-weight: 900;
 border-radius: 5px;
 :hover {
     opacity: 0.8
 }
 ${props => (props.type === 'needed') ? `background: #74B9FF` : null}
 ${props => (props.type === 'raised') ? `background: #FFFA7A` : null}
 ${props => (props.type === 'donate') ? `background: #FFAD72` : null}
 `;
