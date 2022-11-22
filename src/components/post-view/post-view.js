import {useEffect, useState} from "react"
import Card from "../../card";
import Header from "../header/header";
const PostView = ()=> {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        fetch("https://instaclone-backend-10x-app.herokuapp.com//user").then((res)=>res.json()).then(({user})=> {
            setPosts(user);
        }).catch((err)=> {
            if(err) {
                console.log(err)
            }
        })
    }, []);
    return (
        <>
            <Header/>
            <div className="post-container">
            {posts.map((post, i)=> {
                return (
                    <Card post={post} key={i}/>
                )
            })}  
            
        </div>
        </>
        
    )
}
export default PostView;