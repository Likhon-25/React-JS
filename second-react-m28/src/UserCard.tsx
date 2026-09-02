import './UserCard.css'
export default function UserCard({user}){
    return(
        <div className='user'>
            <h3>Name: {user.name}</h3>
            <h4>Email: {user.email}</h4>
            <p><small>Phone: {user.phone}</small></p>
        </div>
    )
}