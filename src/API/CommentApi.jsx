import React ,{useCallback, useEffect, useState} from "react";

const URL  = `https://jsonplaceholder.typicode.com`
function useCommentApi(props){
    

    const {comment,setComment} = useState([])

    const getComment = useCallback(() => {
        const readComment = async () => {
            await fetch (`$ {URL}/comment`)
            .then (out => out.json())
            .then(res => {
                setComment(res)
            }).catch(err => console.log(err.message))
        }
        readComment()
    },[])

    useEffect(()=>{
        getComment()
    },[])

    return {
        comments: [comment,setComment]
    }
}

export default useCommentApi