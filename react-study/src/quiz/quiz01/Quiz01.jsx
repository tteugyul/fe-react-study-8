import { useState } from "react";
function Quiz01() {
    let [count, setCount] = useState(0);
    return (
        <div className="App-header">
            <button onClick={() => {
                count+=2;
                if (count % 2 == 0) {
                    setCount(count);
                }
            }}>짝수출력</button><p style={{ color: 'red' }}>{count}</p>
        </div>
    )
}
export default Quiz01;