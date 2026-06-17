import './Quiz06.css';
import { useState } from 'react';
function Quiz06() {
    let [box, setBox] = useState(['red', 'blue', 'green', 'black']);

    return (
        <div>
            <div>
                <button onClick={() => {
                    setBox(['red', ...box]);
                }}>앞빨간박스추가</button>
                <button onClick={() => {
                    setBox(['blue', ...box]);
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    setBox(['green', ...box]);
                }}>앞초록박스추가</button>

                <button onClick={() => {
                    setBox([...box, 'red']);
                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                    setBox([...box, 'blue']);
                }}>뒤파란박스추가</button>
                <button onClick={() => {
                    setBox([...box, 'green']);
                }}>뒤초록박스추가</button>
                <button onClick={() => {
                    let temp = [...box];
                    temp.shift();
                    setBox(temp);
                }}>앞박스삭제</button>
                <button onClick={() => {
                    let temp = [...box];
                    temp.pop();
                    setBox(temp);
                }}>뒤박스삭제</button>
            </div>
            {
                box.map((item, index) => {
                    return (
                        <div className="box" style={{ backgroundColor: item }} key={index}><button onClick={() => {
                            let temp = [...box];
                            temp.splice(index, 1);
                            setBox(temp);
                        }}>X</button></div>
                    );
                })
            }
        </div>
    );
}
export default Quiz06;