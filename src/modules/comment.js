const commentUrl = ('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eC8v1nWSCKC4m4T5bPlw/comments/');

const getComments = async (itemId) => {
  const comments = await fetch(`${commentUrl}?item_id=${itemId}`);
  const commentsData = await comments.json();
  return commentsData;
};

const addComment = async (item1, name, message) => {
  await fetch(commentUrl, {

    method: 'POST',
    body: JSON.stringify({
      item_id: item1,
      username: name,
      comment: message,

    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });

  const commentsArray = await getComments(item1);
  countComments(commentsArray);
  return commentsArray;
};

export { addComment, getComments, countComments };