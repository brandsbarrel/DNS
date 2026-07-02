import { createContext, useState } from "react";

export const UserContext = createContext();

// Provider Component
const UserProvider = ({ children }) => {
    const [user, setUser] = useState("Home");

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;