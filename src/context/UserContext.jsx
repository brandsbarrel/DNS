import { createContext, useState } from "react";

// Context Create
export const UserContext = createContext();

// Provider Component
const UserProvider = ({ children }) => {
    const [user, setUser] = useState("Home");
    console.log(user);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;