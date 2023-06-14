import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../../context/DataContext'

const AdminPanel = () => {

    const {request}= useContext(DataContext)

    const requests = request.map( (req, index   ) => {
        return <li key={index}><Link to={`/admin-view-request/${req.id}`}> From => {req.companyName}-{req.email}</Link> </li>
    }) 
  return (
    <section className='admin--panel'>
        <h1>Total request : {request.length}</h1>
            <div  className='total--request'>
                <ul>
                    {requests}
                </ul>
            </div>
    </section>
  )
}

export default AdminPanel