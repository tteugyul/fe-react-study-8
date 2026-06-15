import { useState } from "react";
import './Quiz02.css';
function Quiz02() {
    // let [num, setNum] = useState(1);
    let [wow, setWow] = useState("하나");
    return (
        <div id="tom">
            <p id="haha">{wow}</p>
            <button onClick={() => {
                // num++;
                // setNum(num);
                if (wow == '하나') {
                    setWow("둘");
                } else if (wow == '둘') {
                    setWow("셋");
                } else if (wow == '셋') {
                    setWow("하나");
                    // setNum(0);
                }
            }}>변경버튼</button>
        </div>
    );
}
export default Quiz02;