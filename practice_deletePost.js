const posts = [
    { title: "post one", body: "this is post one" },
    { title: "post two", body: "this is post two" }
]


function getPosts() {
    setTimeout(() => {
        let display = "";

        posts.forEach((post) => {
            display += `<li>${post.title}---${post.body}</li>`
        })

        document.body.innerHTML = display;
        console.log("posts is fetched!")

    }, 1000)
}

function createPosts(newPost){
    return new Promise(function(resolve,reject){

        setTimeout(()=>{
            posts.push(newPost);
            console.log("pushed new posts");
            let error=false;
            if(!error){
                resolve()
                console.log("pushed! resolved successful")
            }
            else{
                reject("Error:something went wrong!")
            }
     
     
           },1000)
    })
   
}

function deletePost(posts) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (posts.length>0){
                posts.pop();
                resolve();
                console.log("removed!")
            }
            else{
                reject("Array is empty now");

            }


        },2000)
            
    })
}




createPosts({title: "post three", body: "this is post three"}).then(getPosts).catch(function (rejectFuncion){
    console.log("data missing ,"+rejectFuncion)
})

deletePost(posts).then(getPosts).catch((x)=>{
    console.log(x);
})
deletePost(posts).then(getPosts).catch((x)=>{
    console.log(x);
})
deletePost(posts).then(getPosts).catch((x)=>{
    console.log(x);
})
deletePost(posts).then(getPosts).catch((x)=>{
    console.log(x);
})




