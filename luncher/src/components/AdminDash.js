import React from 'react'

import SchoolData from './SchoolData'
import MySchools from './MySchools'

const AdminDash = () => {
    return (
        <div className="admin-dash">
            <MySchools />
            <SchoolData />
        </div>
    )
}

export default AdminDash