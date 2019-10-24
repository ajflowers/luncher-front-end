import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const MySchools = props => {
    const [schoolsManaged, setSchoolsManaged] = []
    useEffect(() => {
        setSchoolsManaged(props.schools.filter(school => school.admin_id == props.adminID ))

    }, [props.schools])

    return (
        <div></div>
    )

}

const mapStateToProps = state => {
    return {
        schools: state.schools,
        loading: state.dataLoading,
        error: state.error,
        adminID: state.adminID
    }
}

export default connect(mapStateToProps, {})(MySchools)