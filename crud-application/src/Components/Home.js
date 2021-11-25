import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers();
    }, [])
    const loadUsers = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(result.data)
    }
    const deleteUser=async id=>{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        loadUsers();
    }
    return (
        <div className="container">
            <div className="py-4">
                <h3>List of Users</h3>
                <table class="table border shadow">

                    <thead class="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <span className="mr-5">
                                            <Link className="btn btn-primary "to={`/users/${user.id}`}>View</Link> </span>
                                        <span className="mr-5">
                                            <Link className="btn btn-outline-primary " to={`/users/edit/${user.id}`}>Edit</Link> </span>
                                        <span className="mr-5">
                                            <Link className="btn btn-danger " onClick={()=>deleteUser(user.id)}>Delete</Link> </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home
