import { useEffect, useState } from "react"
import { supabase } from "../supabaseclient";

const PRIMARY_ROLE = 3;
export const useSupabase = () => {
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [memberList, setMember] = useState([]);

    const setProspect = ({ name, surname, document_number, photo_url, payment_method, referer_id, whatsapp_number }) => {
        return new Promise((resolve, reject) => {
            supabase
                .from("users")
                .insert({
                    name,
                    surname,
                    document_number,
                    photo_url,
                    payment_method,
                    referer_id,
                    whatsapp_number
                })
                .single()
                .then(({ data, error }) => {
                    resolve([data, error]);
                }).catch((err) => {
                    reject(err);
                });
        })
    }

    const signInWithFacebook = async () => {
        return await supabase.auth.signIn({
            provider: 'facebook',
        });
    }



    useEffect(() => {

        supabase.from("payment_methods").then(({ data }) => {
            setPaymentMethods(data);
        })

        supabase.from("users").select("id,name").eq("role", PRIMARY_ROLE).then(({ data }) => {
            setMember(data);
        })
    }, []);

    const signInWithEmail = () => {
        supabase.auth.signIn(data);
    }

    return {
        supabase,
        paymentMethods,
        memberList,
        setProspect,
        signInWithFacebook,
        signInWithEmail
    }
}