import React, { useContext, useState, useEffect } from 'react'
import { supabase } from '../supabaseclient';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        /** 
            @description Check active sessions and sets the user
        **/
        const session = supabase.auth.session();
        setUser(session?.user ?? null);
        setIsLoading(false);

        /** 
            @description  Listen for changes on auth state (logged in, signed out, etc.) 
        **/
        const { data: listener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setUser(session?.user ?? null);
                setIsLoading(false);
            }
        )

        return () => {
            listener?.unsubscribe();
        }
    }, []);

    // Will be passed down to Signup, Login and Dashboard components
    const value = {
        signUp: (data) => supabase.auth.signUp(data),
        signIn: (data) => supabase.auth.signIn(data),
        signOut: () => supabase.auth.signOut(),
        user,
    }

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}


export function useAuth() {
    return useContext(AuthContext)
}