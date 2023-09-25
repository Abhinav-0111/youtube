import { useEffect, useState } from "react";
import fetchdatafromApi from "../utiles/Api";
import ContextApi from "./ContextApi";


export default function ContextState(props) {
    const [loading, setloading] = useState(false)
    const [search, setsearch] = useState([])
    const [selectcategories, setselectcategories] = useState("New")
    const [mobilemenu, setmobilemenu] = useState(false)

    const fetchselectedcategorydata = (data) => {
        setloading(true)
        fetchdatafromApi(`search/?q=${data}`).then(({contents}) => {
            console.log(contents)
            setsearch(contents)
            setloading(false)
        })
    }

    useEffect(() => {
        fetchselectedcategorydata(selectcategories)
    }, [selectcategories])

    return (
        <>
            <ContextApi.Provider
                value={{
                    loading,
                    setloading,
                    search,
                    setsearch,
                    selectcategories,
                    setselectcategories,
                    mobilemenu,
                    setmobilemenu
                }}>
                {props.children}
            </ContextApi.Provider>
        </>
    )
}