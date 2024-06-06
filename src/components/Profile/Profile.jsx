import ProfileInfo from "./ProfileInfo"
import MyPosts from "./MyPosts"
const Profile = () => {
    return( 
        <div className="Profile">
            <h1>Profile</h1>
            <MyPosts/>
            <ProfileInfo/>
        </div>
    )
}

export default Profile