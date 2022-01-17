import { useEffect, useState } from "react"
import { supabase } from "../supabaseclient";

export const useSupabase = () => {

    const [paymentMethods, setPaymentMethods] = useState([]);
    const [memberList, setMember] = useState([]);


    const setProspect = ({ name, surname, document_number, photo_url, payment_method, referer_id, whatsapp_number }) => {
        return new Promise((resolve, reject) => {
            supabase
                .from("prospects")
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


    useEffect(() => {
        supabase.from("payment_methods").then(({ data }) => {
            setPaymentMethods(data);
        })

        supabase.from("members").then(({ data }) => {
            setMember(data);
        })
    }, [])

    return {
        paymentMethods,
        memberList,
        setProspect
    }
}