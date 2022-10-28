import apiKey from '../../apiKey.js';

const url = (`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/likes/`);

const getLikes = async () => {
  const resolve = await fetch(url);
  const data = await resolve.json();
  return data;
};

const postLikes = async (url, item1, count) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({

      item_id: item1,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });
  const likeArray = await getLikes();
  likeArray.forEach((element) => {
    if (Number(element.item_id) === Number(item1)) { count.innerText = `${element.likes}`; }
  });
};
export { getLikes, postLikes };