import { useReducer } from "react"
import { TecnonyContext } from "./TecnonyContext"
import { TecnonyReducer } from "./TecnonyReducer"
import { CARGAR_INFO } from "./TecnonyTypes"

export const TecnonyState = ({ children }) => {

    const userinfo = {
        userinfo: null, cedula: null
    }

    const [userinfo1, SetUserinfo1] = useReducer(TecnonyReducer, userinfo);

    const cargarInfor = (general) => {
        SetUserinfo1({ payload: general, type: CARGAR_INFO })
        localStorage.setItem('user', JSON.stringify(general));
    }

    return <TecnonyContext.Provider

        value={{ userinfo: userinfo1.userinfo, cargarInfor }}
    >
        {children}
    </TecnonyContext.Provider>
}