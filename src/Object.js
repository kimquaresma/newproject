import React, {useState} from 'react';

const Object = () => {
    const [postData, setPostData]= useState({})

    const inputPost = () => {
        setPostData(post)
    }
    const post = {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }



    return (
        <div>
            <h1>title is {postData.title}</h1>
            <h2>description is {postData.body}</h2>

            <button onClick={inputPost}>데이터정보가져오기</button>
        </div>
    );
};

export default Object;