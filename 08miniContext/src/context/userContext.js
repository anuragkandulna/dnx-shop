import React from "react";

// 1. Create a basic user context and export it.
const UserContext = React.createContext()

export default UserContext;

// 2. Create a provider that provides the data to context through UserContext() globally.
// All components can take access through createContext.
{/* <UserContext>
    <Login />
    <Card>
        <Data />
    </Card>
</UserContext> */}