import { use } from "react"
import UserCard from "./UserCard";

function Users({UserDataPromise}){
    const users = use(UserDataPromise)
    console.log(users);
    return(
        <div>
            <h2>Users:{users.length} </h2>
            {
                users.map(user => <UserCard user={user} ></UserCard>)
            }
        </div>
    )
}

export default Users

// // callback
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => {console.log(data);})

// // asunc await
// async function loadData() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     return data
// }

// const loadData2 = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = res.json();
//     return data
// }