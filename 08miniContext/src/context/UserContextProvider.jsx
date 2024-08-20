import React from "react";
import UserContext from "./userContext";

const UserContextProvider = ({children}) => {
    // This is data that provider provides.
    const [user, setUser] = React.useState(null)

    // Only those data that needs to be accessed should be placed in value={}
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;