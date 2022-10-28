const commentUrl = ('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eC8v1nWSCKC4m4T5bPlw/comments/');


const getComments = async (item_id)=>{
    const comments = await fetch(`${commentUrl}?item_id=${item_id}`);
    const commentsData = await comments.json();
    return commentsData;
}

const countComments = (commentsArray)=>{
    let countComment = 0;
    commentsArray.forEach(comment => {
        countComment++;
    });
    return countComment;
}

const addComment = async (item1,name,message)=>{
    await fetch(commentUrl, {

        method: 'POST',
        body: JSON.stringify({
          item_id: item1,
          username: name,
          comment: message

        }),
        headers: {
          'content-type': 'application/json; charset=UTF-8',
        },
      });
     
       
      
      const commentsArray = await getComments(item1);
      countComments(commentsArray);
      return commentsArray;
      
}

export {addComment,getComments,countComments};