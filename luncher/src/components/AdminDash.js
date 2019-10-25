import React from 'react'
import { connect } from 'react-redux'

import SchoolData from './SchoolData'
import SchoolAdmin from './SchoolAdmin'

const AdminDash = ({ mySchools }) => {
    return (
        <div className="admin-dash">
            {mySchools.length > 0 ? <SchoolAdmin /> : <SchoolData />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        mySchools: state.mySchools
    }
}

export default connect(mapStateToProps, {})(AdminDash)