import PropTypes from 'prop-types'
const Profile=({fullName,bio,profession,children,handleHello})=>{
    
    return(
        <div className="iheb">
            {
                children
            }
            <h1>my name is {fullName}</h1>
            <h2>I am {bio} and I am {profession}</h2>
            <button onClick={()=>handleHello(fullName)}>Hello</button>
        </div>
    )
}
Profile.defaultProps={
    name : "GOMYCODE",
    age : 99
}
Profile.propTypes = {
    name: PropTypes.string
}



export default Profile