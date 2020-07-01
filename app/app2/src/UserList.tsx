import * as React from "react";
import {users} from "./users"

interface UserProps {
    name:string;
    image:string;
}

const UserCard : React.FC<UserProps> = ({name,image}) => <div>
    <p>{name}</p>
    <img src={image}></img>
</div>

const UserList : React.FC = () => <div style={{border:"solid 4px red",width:"fit-content"}}>
    <p>App2 User List</p>
    <div>{users.map(user => <UserCard key={user.name} {...user}></UserCard>)}</div>
</div>

export default UserList;
