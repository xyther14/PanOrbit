import { useState, createContext, useEffect, useContext } from 'react';
import axios from "axios";
const UserContext = createContext({});

export function UserProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        
        async function fetchData() {
          
          const { data } = await axios.get(
            `https://panorbit.in/api/users.json`
          );
          
          setUsers(data);
        }
        fetchData();
      }, []);
      return (
        <UserContext.Provider
          value={{
            users, authUser, setAuthUser
          }}
        >
          {children}
        </UserContext.Provider>
      );
}

export function useAPI() {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
  }

export default UserContext;


