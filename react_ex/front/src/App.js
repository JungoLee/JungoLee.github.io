import {useState} from 'react';
import './App.css';

function App(){
    // react 라는 js에서 useState 를 가지고온다.
    // 배열식 변수지정 boardCont 는 useState 객체를 바라보고
    // setBoardCont는 useState 에서 두번째 파라미터를 바라보겠지?
    // useState(
    //  return [{쏴준 객체들},setBoardCont를 위한 함수]
    // ) 이런 모양일듯
    const [boardCont, setBoardCont] = useState({
        title: '',
        content: ''
    });

    const [viewCont, setViewCont] = useState([]);

    // input 과 textarea에서 실행할 함수 e는 function(e) 같은 파라미터
    const getValue = e => {
        // 개신기 e.tartet은 엘리멘트 타겟임 const,value 는 target 속성을 객체화 해서 지정함
        const { name, value } = e.target;
        // setBoardCont 실행후 name이 같은것끼리 지정해줌
        setBoardCont({
            ...boardCont,
            [name]: value,
        })
    };
    const _submit = () => {
        console.log(viewCont)
        setViewCont(viewCont.concat({...boardCont}));
        console.log(boardCont)

    };
    return (
        <div className="App">
        <h1>Movie Review</h1>
        <div className='movie-container'>
            {viewCont.map(object =>
                    <div>
                        <h2>{object.title}</h2>
                        <div>
                            {object.content}
                        </div>
                    </div>
            )}
        </div>
        <div className='movie-container'>
            <h2>제목</h2>
            <div>
                내용
            </div>
        </div>
        <div className='form-wrapper'>
            <input className="title-input" type='text' placeholder='제목'  onChange={getValue} name="title"/>
            <textarea className="text-area" placeholder='내용' onChange={getValue} name="content"></textarea>
        </div>
        <button className="submit-button"
            onClick={_submit}
        >입력</button>
        </div>
    )
}

export default App;