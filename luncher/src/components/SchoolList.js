import React from 'react';

const SchoolList = props => {

    return (
        <>
            {props.schoolList.map((school, index) => {
                return (
                    <div className='school' key={index}>
                        <h2>{school.schoolName}</h2>
                        <p>{school.address}</p>
                        <p>{school.city}</p>
                        <p>{school.state}</p>
                        <p>{school.zip}</p>
                        <p>{school.fundsNeeded}</p>
                        <p>{school.fundsRaised}</p>

                    </div>
                )
            })}
        </>
    );

};

export default SchoolList;