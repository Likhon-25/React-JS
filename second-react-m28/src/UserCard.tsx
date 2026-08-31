import { use } from "react";

export default function UserCard({user}){
    return(
        <div>
            <h3>Name: {user.name}</h3>
        </div>
    )
}