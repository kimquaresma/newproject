// import React, {useState} from 'react';
//
// const App = () => {
//     //1. 상태 정의
//     const [hello,setHello] = useState("안녕하세용요용이르")
//     //useState로 먼저 작성 후, const로 hello라는 데이터를 setHello라는 명령어에 정의
//
//     //3. 데이터 변경 함수
//     const changeHello = () => {
//         setHello("hello")
//     }
//
//
//
//
//     return (
//         <div>
//             {/*//2. 데이터 확인 (테스트)*/}
//             <h1>{hello}</h1>
//             {/*//4. 버튼 작성 onclick 입력 후 내용 작성*/}
//             <button onClick={changeHello}>이름 바꾸기</button>
//         </div>
//     );
// };
//
// export default App;

import React, {useState} from 'react';

const String = () => {
    //1. 데이터 담을 상태 정의
    const [age, setAge] = useState(0)

    //3. 데이터 변경 함수
    const changeAge = () => {
        setAge(32)
    }


    return (
        <div>
            {/*//2. 데이터 확인 크롬에서 0이 나오는지 확인*/}
            <h1>{age}</h1>
            {/*//4. 버튼 작성*/}
            <button onClick={changeAge}>나이바꾸기</button>
        </div>
    );
};

export default String;