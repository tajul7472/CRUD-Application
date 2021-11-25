import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const AddUsers = () => {
    let history=useHistory();
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
    const handleSubmit = async e => {
        e.preventDefault();
        await axios.post('https://jsonplaceholder.typicode.com/users', user);
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
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>

            </div>

        </div>
    )
}

export default AddUsers
