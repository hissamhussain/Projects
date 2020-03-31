import React  from 'react';
import { Link } from 'react-router-dom';
import UserService from '../services/services';


const UserDetail = (props) => {

    
        const id = props.match.params.id;
        const users = UserService.getUsers
    
        const user = users.map(user => {
            if(user.username === id)
            {
                return(
                    <div className="box1" key={user.username}> 
                        <img src={user.pic} alt="" style={{width:"100%",borderRadius:"12px"}}></img>
                        <div className="container">
                            <h2>{user.fname}</h2>
                            <p>{user.lname}</p>
                            <p>{user.email}</p>
                            <p>{user.cell}</p>
                        </div>
                    </div>
                )
            }
            
            
        })

        return (
            <div>
                {user}
                <Link to="/UserList">
                    <button className="btn" >Back</button>
                </Link>
            </div>
        )
   
}

export default UserDetail;