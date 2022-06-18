import axios from "axios"

async function getData(userId){
    const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    let userAndPosts = {...user}

    let posts=[]

    post.forEach(aPost => {
        posts.push(aPost)
    });

    userAndPosts.posts=posts

    return userAndPosts
}

export{getData}