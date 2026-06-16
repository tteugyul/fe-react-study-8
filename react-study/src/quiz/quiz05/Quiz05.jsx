import './Quiz05.css';
import { useState } from 'react';
function Quiz05() {
    let [box, setBox] = useState(['red', 'blue', 'green', 'black']);
    // let [box, setBox] = useState([1, 2, 3, 4]);
    //1:red 2:blue 3:green 4:black
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
                    return (<div className="box" style={{ backgroundColor: item }} key={index}></div>);
                })
                // box.map((item, index) => {
                //     if (item == 1) {
                //         return (<div className='box' style={{ backgroundColor: 'red' }}></div>);
                //     } else if (item == 2) {
                //         return (<div className='box' style={{ backgroundColor: 'blue' }}></div>);
                //     } else if (item == 3) {
                //         return (<div className='box' style={{ backgroundColor: 'green' }}></div>);
                //     } else {
                //         return (<div className='box'></div>);
                //     }
                // })
            }
        </div>
    );
    //배열에 요소 직접 넣는 경우
    // let [box, setBox] = useState([<div className='box' style={{ backgroundColor: 'red' }}></div>,
    // <div className='box' style={{ backgroundColor: 'green' }}></div>,
    // <div className='box' style={{ backgroundColor: 'blue' }}></div>,
    // <div className='box' style={{ backgroundColor: 'black' }}></div>
    // ]);
    // let [bgc, setBgc] = useState('');
    // return (
    //     <div>
    //         <div>
    //             <button onClick={() => {
    //                 let temp = [...box];
    //                 temp.unshift(<div className='box' style={{ backgroundColor: 'red' }}></div>);
    //                 setBox(temp);
    //             }}>앞빨간박스추가</button>
    //             <button onClick={() => {
    //                 let temp = [...box];
    //                 temp.unshift(<div className='box' style={{ backgroundColor: 'blue' }}></div>);
    //                 setBox(temp);
    //             }}>앞파란박스추가</button>
    //             <button onClick={() => {
    //                 let temp = [...box];
    //                 temp.unshift(<div className='box' style={{ backgroundColor: 'green' }}></div>);
    //                 setBox(temp);
    //             }}>앞초록박스추가</button>
    //             <button onClick={() => {
    //                 let temp = [...box];
    //                 temp.push(<div className='box' style={{ backgroundColor: 'red' }}></div>);
    //                 setBox(temp);
    //             }}>뒤빨간박스추가</button>
    //             <button onClick={() => {
    //                 let temp = [...box];
    //                 temp.push(<div className='box' style={{ backgroundColor: 'blue' }}></div>);
    //                 setBox(temp);
    //             }}>뒤파란박스추가</button>
    //             <button onClick={() => {
    //                 let temp = [...box];
    //                 temp.push(<div className='box' style={{ backgroundColor: 'green' }}></div>);
    //                 setBox(temp);
    //             }}>뒤초록박스추가</button>
    //         </div>
    //         <div className='box' style={{ backgroundColor: 'red' }}></div>
    //         <div className='box' style={{ backgroundColor: 'green' }}></div>
    //         <div className='box' style={{ backgroundColor: 'blue' }}></div>
    //         <div className='box' style={{ backgroundColor: 'black' }}></div>
    //     </div>
    // );
}
export default Quiz05;