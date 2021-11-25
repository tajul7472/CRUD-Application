import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useHistory,useParams } from 'react-router'
import { Link } from 'react-router-dom'

const User = () => {
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    })
    const {id}=useParams();
    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers = async()=>{
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(result.data)
    }
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">Back to Home</Link>
            <h4 className="display-4">User Id :{id}</h4>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">name: {user.name}</li>
                <li className="list-group-item">Username: {user.username}</li>
                <li className="list-group-item">E-mail: {user.email}</li>
                <li className="list-group-item">Phone: {user.phone}</li>

            </ul>
            
        </div>
    )
}

export default User
