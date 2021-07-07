import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, Card, H1, P, ActionButton } from '../styles';
import { deleteSchool } from '../actions';

const SchoolAdmin = ({ mySchools, error, adminID, deleteSchool }) => {
    const history = useHistory();

    const handleDelete = e => {
        e.preventDefault();
        deleteSchool(adminID);
    }

    const editInfo = e => {
        e.preventDefault();
        history.push("/dashboard/edit")
    }

    return (
        <div className='my-schools'>
            <h2>My School:</h2>
            {error && <p>{error}</p>}
            {mySchools.map((school => (
                <Container key={school.id}>
                    <Card>
                        <H1>{school.school_name}</H1>
                        <P>{school.address}</P>
                        <P>{school.city}, {school.state}. {school.zipcode}</P>
                        <ActionButton
                            onClick={editInfo}
                        >
                            Edit School
                        </ActionButton>
                        <br />
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
        mySchools: state.mySchools,
        error: state.error,
        adminID: state.adminID
    }
}

export default connect(mapStateToProps, { deleteSchool })(SchoolAdmin)