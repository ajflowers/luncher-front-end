import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Card, H1, P, ActionButton } from '../styles';
import { deleteSchool } from '../actions';

const MySchools = ({ schools, mySchools, error, adminID, deleteSchool }) => {

    const handleDelete = e => {
        e.preventDefault();
        deleteSchool(adminID);
    }

    return (
        <div className='my-schools'>
            <h2>schools currently managed:</h2>
            {error && <p>{error}</p>}
            {mySchools.map((school => (
                <Container key={school.id}>
                    <Card>
                        <H1>{school.school_name}</H1>
                        <P>{school.address}</P>
                        <P>{school.city}, {school.state}. {school.zipcode}</P>
                        <ActionButton>Edit School</ActionButton>
                        <ActionButton
                            onClick={handleDelete}
                        >
                            Delete School
                        </ActionButton>
                    </Card>
                </Container>
            )
            ))}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        schools: state.schools,
        mySchools: state.mySchools,
        error: state.error,
        adminID: state.adminID
    }
}

export default connect(mapStateToProps, { deleteSchool })(MySchools)