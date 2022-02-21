import { supabase } from "../supabaseclient";
import { PRIMARY_ROLE } from "./homedata-service";

export const supabaseService = () => {

    const getPaymentMethodList = () => supabase.from("payment_methods");
    const getMemberList = () => supabase.from("users").select("id,name").eq("role", PRIMARY_ROLE);
    const postProspect = (props) => {
        if (props) {
            return supabase
                .from("users")
                .insert({
                    ...props
                })
                .single()
        } else {
            return null;
        }
    }


    return {
        getPaymentMethodList,
        getMemberList,
        postProspect
    }
}