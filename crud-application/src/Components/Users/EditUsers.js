import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useHistory,useParams } from 'react-router'

const EditUsers = () => {
    const{id}=useParams()
    let history = useHistory();
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    })
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers = async()=>{
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(result.data)
    }
    const handleSubmit = async e => {
        e.preventDefault();
        await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
        history.push("/");


    }
    return (
        <div className="container">
            <div className="w-75 max-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={handleSubmit}>
                    <level>
                        Name:
                        <div className="form-group">
                            <input type="text"
                                className="form-control form-control-lg mb-3"
                                placeholder="Enter your name"
                                name="name"
                                defaultValue={user.name}
                                onChange={handleChange} />
                        </div>
                    </level>
                    <level>
                        UserName:
                        <div className="form-group">
                            <input type="text"
                                className="form-control form-control-lg mb-3"
                                placeholder="Enter your Username"
                                name="username"
                                defaultValue={user.username}
                                onChange={handleChange} />
                        </div>
                    </level>
                    <level>
                        E-mail:
                        <div className="form-group">
                            <input type="email"
                                className="form-control form-control-lg mb-3"
                                placeholder="Enter your E-mail Address"
                                name="email"
                                defaultValue={user.email}
                                onChange={handleChange} />
                        </div>
                    </level>
                    <level>
                        Phone:
                        <div className="form-group">
                            <input type="text"
                                className="form-control form-control-lg mb-3"
                                placeholder="Enter your Phone Number"
                                name="phone"
                                defaultValue={user.phone}
                                onChange={handleChange} />
                        </div>
                    </level>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>

            </div>

        </div>
    )
}

export default EditUsers
