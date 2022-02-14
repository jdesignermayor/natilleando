import { supabase } from "../supabaseclient";
 
export const useAuth = () => {

    return {
        signInWithGoogle : () => supabase.auth.signIn({
            provider: 'google',
        })
    }
}