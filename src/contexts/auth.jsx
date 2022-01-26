import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseclient";

export const useAuth = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const resetUser = () => {
    setUser();
    setIsLoggedIn(false);
    setIsLoading(false);
  };

  useEffect(() => {
    /** 
            @description Check active sessions and sets the user
        **/
    const session = supabase.auth.session();
    setUser(session?.user ?? null);
    setIsLoading(false);

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          setUser(session?.user ?? null);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        setIsLoading(false);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  // Will be passed down to Signup, Login and Dashboard components
  const value = {
    user,
    isLoggedIn,
    resetUser,
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
  };

  return value;
};
