import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserService from '../services/services'


export default class UserList extends Component {

    state = {
        users: []
    }


    componentDidMount() {

        if(UserService.isSet)
        {
            this.setState({
                users: UserService.getUsers
            })
        }
        else
        {
            fetch('https://randomuser.me/api/?results=20')
            .then(user => {
                return user.json()
            })
            .then(user => {
                //console.log(user)
               const users =  user.results.map(u => {
                    //console.log(u)
                    const user = {
                        fname: u.name.first,
                        lname: u.name.last,
                        email: u.email,
                        cell: u.phone,
                        username : u.login.username,
                        pic : u.picture.large
                    }
                    return user
                    //console.log(userr)
                    
                })

                UserService.setUsers = users

                this.setState({
                    users: UserService.getUsers
                })
                //console.log(this.state.users)

            })
        }
    }

    render() {
        const users = this.state.users
       console.log(users.length)
        const userss =  users.length ? (
            users.map(user => {
                //console.log(user)
                return(
                   
                    <div className="box" key={user.username}> 
                        <div className="container"> 
                            <Link to={user.username}><h1>{user.fname}</h1></Link>
                            <p>{user.lname}</p>
                            <p>{user.email}</p>
                            <p>{user.cell}</p>
                        </div>
                    </div>
                )
                
            })

        ) : (
                
                    <div>
                    <h1>No Users yet</h1>
                </div>
                
            )
        return (
            <div className="main">
                {userss}
            </div>
        )

    }

}