import { use } from "react"

export default function Posts({PostDataPromise}){
    const posts = use(PostDataPromise);
    console.log(posts);
    return(
        <div>
            <h3>-------------</h3>
            <h2>Posts: </h2>
        </div>
    )
}