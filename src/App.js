import React, {useState} from 'react';

// library를 불러오는 공간

const App = () => {

    // 변수, 상수, 함수 , 상태 를 선언하는 곳
    const [hello, setHello] = useState("안녕하세용요용이르") // string , number, object, array 데이터가 들어간다.
    const [age, setAge] = useState(0)
    const changeHello = () => {
        setHello("hello")
    }
    const changeAge = () => {
        setAge(32)
    }



    return (

        // 브라우져에서 보여지는 부분
        <div>
            <h1>{hello}</h1>
            <h1>{age}</h1>
            <button onClick={changeHello}>이름바꾸기</button>
            <button onClick={changeAge}>나이바꾸기</button>
        </div>
    );
};

export default App;