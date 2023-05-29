import React, {useState} from 'react';

// library를 불러오는 공간

const App = () => {

    // 변수, 상수, 함수 , 상태 를 선언하는 곳
    const [hello, setHello] = useState("안녕하세용요용이르") // string , number, object, array 데이터가 들어간다.
    const [age, setAge] = useState(0)
    const [postData, setPostData] = useState({})
    const changeHello = () => {
        setHello("hello")
    }
    const changeAge = () => {
        setAge(32)
    }
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

        // 브라우져에서 보여지는 부분
        <div>
            <h1>{hello}</h1>
            <h1>{age}</h1>
            <h1>title is {postData.title}</h1>
            <h2>description is {postData.body}</h2>
            <h3>userid is {postData.userId}</h3>
            <button onClick={changeHello}>이름바꾸기</button>
            <button onClick={changeAge}>나이바꾸채ㅜ</button>
            <button onClick={inputPost}>데이터정보가져오기</button>
        </div>
    );
};

export default App;

//코드 빌드 순서
//1. 위에서 아래로
//2. = 기준으로 우측에서 좌측으로 치환.
//3. .은 하위 메소드를 호출하는 명령어.
//4. ,는 그리고로 해석한다.