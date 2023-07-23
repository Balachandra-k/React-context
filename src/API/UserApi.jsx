import React, { useCallback, useEffect, useState} from "react";

const URL = `https://jsonpalceholder.typicode.com`


function useUserApi(props){
    const {user,setUser} =  useState([])

    const getUsers = useCallback(()=> {
        const readUser= async () => {
            await fetch ('${URL}/users')
            .then(out => out.json())
            .then(res => {
                //console.log
                setUser(res)
            }).catch(err => console.log(err.message))
        }
        readUser()
    },[])
    useEffect(() => {
        getUsers()
    },[])
    return{
        user: [user,setUser]
    }
}

export default useUserApi