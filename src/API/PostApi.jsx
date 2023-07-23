import React ,{useCallback, useState,useEffect} from "react";

const URL = `https://jsonplaceholder.typicode.com`

/*custom Hook*/
function usePostApi(props){
    const {post,setPost} = useState([])

    const getposts =useCallback(() =>{
        const readpost = async () => {
            await fetch (`${URL}/posts`)
            .then (out => out.json())
            .then (res => {
                // console.log("posts =", res)
                setPost(res)
            }).catch(err => console.log(err.message))
        }
        readpost()
    },[])
    useEffect(()=>{
        getposts()
    },[])
       return{
        posts: [post,setPost]
    }
}
export default usePostApi