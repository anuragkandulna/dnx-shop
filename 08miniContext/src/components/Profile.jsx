import React, {useState, useContext} from "react";
import UserContext from "../context/userContext";

function Profile() {

    // User correct context to access the data
    const {user} = useContext(UserContext)

        if (!user) return <div>please login</div>

        return (
            <div> Welcome {user.usename}!!!</div>
        )

}

export default Profile;