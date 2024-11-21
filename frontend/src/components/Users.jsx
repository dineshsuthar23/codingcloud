import React, { useEffect, useState } from 'react'
import axios from "axios";

const Users = () => {
    const [user, setUser] = useState({})
    const [udata, setUdata] = useState([]);
    const [showform, setShowform] = useState(false);
    const [userCount, setUserCount] = useState(0);

    const getAllUserData = async () => {
        let gotdata = await axios.get('http://localhost:5000/users')
        setUdata(gotdata.data)
        setUserCount(gotdata.data.length)
        console.log("Users in Database: ", userCount)
    }

    useEffect(() => {
        getAllUserData()
        console.log(udata)
    }, [])


    // update form
    const handleEdit = async (x) => {
        setShowform(true)
        setUser(x)
        console.log(x)
    }

    let handlesubmit = async (e) => {
        e.preventDefault();
        const update = await axios.put(`http://localhost:5000/users/${user._id}`, user)
        console.log(update)
        alert('user updated successfully');
        getAllUserData();
        setShowform(false);
    }

    let UserHandler = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }


    // delete function
    let deleted = async (id) => {
        let checkdel = confirm("Do you want to delete this User!")
        if (checkdel) {
            try {
                await axios.delete(`http://localhost:5000/users/${id}`);
                getAllUserData()
            } catch (err) {
                console.log(err)
            }
        } else {
            alert("User deletion Canceled")
        }
    }

    return (
        <>
            {showform &&
                <div className="wrapper">
                    <h1>Registration Page</h1>
                    <form onSubmit={handlesubmit}>
                        <div>
                            <input type="text" onChange={UserHandler} value={user.name} name='name' placeholder='Name' />
                        </div>
                        <div>
                            <input type="text" onChange={UserHandler} value={user.email} name='email' placeholder='Email' />
                        </div>
                        <div>
                            <input type="text" onChange={UserHandler} value={user.password} name='password' placeholder='Password' />
                        </div>
                        <div>
                            <input type="date" onChange={UserHandler} value={user.date} name='date' />
                        </div>
                        <div>
                            <button className='submitButton'>Update</button>
                        </div>
                        <div>
                            <p style={{ color: 'red', fontSize: '12px', maxWidth: '200px' }}>"If you don't want to update data then just click on submit without changing any fields"</p>
                        </div>
                    </form>
                </div>
            }

            <h1>Total <span style={{ color: "#319e8c" }}>{userCount}</span> Users</h1>
            <div className='wrapUseer'>
            {udata.length > 0
                ? (udata.map((x) => {
                    return (
                        <>
                                <div key={x._id} className="product">
                                    <pre>
                                        <h3>{x.name} </h3>
                                        <h3> {x.email} </h3>
                                        <h3> {"*".repeat(x.password.length)}</h3>
                                        <h3>{x.date}</h3>
                                    </pre>
                                    <div>
                                        <button onClick={() => handleEdit(x)} className='btn up'>Edit</button>
                                        <button onClick={() => deleted(x._id)} className='btn del'>Delete</button>
                                    </div>
                                </div>
                        </>
                    )
                }))
                : (<h2 style={{ textAlign: "center" }}>No Users Found</h2>)
            }
            </div>
        </>
    )
}

export default Users
