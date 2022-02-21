import React, { useState, useEffect } from 'react';
import { supabaseService } from "../services/supabase-service";


export const useSupabase = () => {
    const [memberList, setMemberList] = useState([]);
    const [paymentMethodsList, setPaymentMethods] = useState([]);
    const { postProspect } = supabaseService();

    const setProspect = (props) => new Promise((resolve, reject) => {
        postProspect(props).then(({ data, error }) => {
            resolve([data, error]);
        }).catch((err) => {
            reject(err);
        });
    })

    useEffect(() => {
        const { getPaymentMethodList, getMemberList } = supabaseService();

        getPaymentMethodList().then(({ data }) => {
            setPaymentMethods(data);
        });

        getMemberList().then(({ data }) => {
            setMemberList(data);
        });
        
    }, []);

    return {
        paymentMethodsList,
        memberList,
        setProspect
    }

}
