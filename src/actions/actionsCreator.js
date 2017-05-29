//Increment
export function increment(index){
    return{
        type:'INCREMENT_LIKES',
        index
    }
}

// View Post Detail
// export function viewPost(post){
//     return{
//         type:'VIEW_POST',
//         post
//     }
// }

const viewPost = (currentPost) =>{
    return{
        type:'VIEW_POST',
        currentPost
    }
}




//add Ccmment
export function addComment(postId, author, comment){
    return{
        type: 'ADD_COMMENT',
        postId, 
        author, 
        comment
    }
}



//remove comment
export function removeComment(postId, i){
    return{
        type:'REMOVE_COMMENT',
        postId,
        i
    }
}


export {viewPost};