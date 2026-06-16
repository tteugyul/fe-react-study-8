import './Quiz04.css';
import { useState } from 'react';
function Quiz04() {
    //map -> <div className='box'>박스</div>

    // let [boxes, setBoxes] = useState([<div className="box">박스</div>]);
    // let [arr, setArr] = useState([1]);
    let [arr, setArr] = useState([1, 2]);
    return (
        <div>
            <div style={{ margin: '10px' }}>
                <button onClick={() => {
                    //단순 반복용도로 사용하는 arr배열에 배열의 갯수를 늘리기위해 값 추가
                    // let temp = [1, ...arr];//[1,1];
                    //let temp = [...arr, 1];

                    //[...Array(2)] => [undefined, undefined] 2개의 길이를 가진 배열 생성
                    //그냥 Array(2)를 사용하면 [,] 아무것도 없는데 길이만 2개인 배열 생성이므로 사용X
                    let temp = [...arr, arr.length + 1];
                    //[...arr, 1]; [1,1];
                    setArr(temp);
                }}>추가</button>
            </div>
            <div>
                {
                    arr.map((_, b) => {// 만약 매개변수를 사용하지않는다면 _ 하나 입력
                        return <div className='box' key={b}>박스</div>
                    })
                }
            </div>
        </div>
        // <div>
        //     <div style={{ margin: '10px' }}>
        //         <button onClick={() => {
        //             //boxes 배열에 화면에 그리는 요소를 추가하기
        //             let temp = [...boxes];
        //             temp.push(<div className="box">박스</div>);
        //             setBoxes(temp);
        //         }}>추가</button>
        //     </div>
        //     <div>
        //         {boxes}
        //         {/* <div className="box">박스</div> */}
        //     </div>
        // </div>
    );
}
export default Quiz04;