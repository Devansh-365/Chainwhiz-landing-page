import React from 'react';

const AuthContext:React.FC = () => {
    
    return <div>Have a good coding</div>
}
export default AuthContext;

// import { createContext, useContext, ReactNode, useState } from "react";

// type authContextType = {
//     user: boolean;
//     login: () => void;
//     logout: () => void;
// };

// import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'


// const authContextDefaultValues: authContextType = {
//     user: null,
//     login: () => {useMetamask()},
//     logout: () => {},
// };

// const AuthContext = createContext<authContextType>(authContextDefaultValues);

// export function useAuth() {
//     return useContext(AuthContext);
// }

// type Props = {
//     children: any;
// };

// export function AuthProvider({ children }: Props) {
//     const [user, setUser] = useState<boolean>(null);

//     const logout = () => {
//         setUser(false);
//     };

//     const value = {
//         user,
//         login,
//         logout,
//     };

//     return (
//         <>
//             <AuthContext.Provider value={value}>
//                 {children}
//             </AuthContext.Provider>
//         </>
//     );
// }
