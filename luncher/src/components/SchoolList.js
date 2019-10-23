import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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




export default function SchoolList() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        axios
            .get(`https://luncher-bw.herokuapp.com/api/schools`)

            .then(response => {
                const schoolInput = response.data.filter(school =>
                    school.school_name.toLowerCase().includes(query.toLowerCase())
                );
                console.log('school list', response);
                setData(schoolInput);
            })
    }, [query]);


    const handleInputChange = event => {
        setQuery(event.target.value);
    }



    return (
        <section className='school-list'>
            <SearchForm
                placeholder='Search Schools'
                value={query}
                handleChange={handleInputChange}
            />

            {data.map((school => (
                <Card key={school.id}>
                    <H1>{school.school_name}</H1>
                    <P>{school.address}</P>
                    <P>{school.city}, {school.state}. {school.zipcode}</P>
                    <ActionButton type='needed'>{school.funds_needed} Funds Needed</ActionButton>
                    <ActionButton type='raised'>{school.funds_raised} Funds Raised</ActionButton>
                    <br />
                    <ActionButton type='donate'>Donate To {school.school_name}</ActionButton>
                    <br />
                </Card>
            )
            ))}
        </section>
    );

};
