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
            let error=true;
            if(!error){
                resolve()
                console.log("resolved successful")
            }
            else{
                reject("Error:something went wrong!")
            }
     
     
           },2000)
    })
   
}
createPosts({title: "post three", body: "this is post three"}).then(getPosts).catch(function (rejectFuncion){
    console.log("data missing ,"+rejectFuncion)
})




// createPosts({title: "post four", body: "this is post four"},getPosts)

// getPosts();
