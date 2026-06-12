import Box from './Box';
function Props01() {
    let arr = ['아침', '점심', '저녁'];
    let detail = ['졸리다', '배부르다', '피곤하다'];
    return (
        <div>

            {
                arr.map((item, index) => {
                    return (
                        <Box text={item} detail={detail[index]} />
                    );
                })
            }

            <Box text={arr[0]} detail={detail[0]} />
            <Box text={arr[1]} detail={detail[1]} />
            <Box text={arr[1]} detail={detail[2]} />
            {
                arr.map((item, index) => {
                    return (
                        <div style={{ backgroundColor: 'coral' }} >
                            <h1>{arr[index]}</h1>
                            <h1>{item}</h1>
                            <p>{detail[index]}</p>
                        </div>
                    );
                })
            }
            <div>
                <h1 style={{ backgroundColor: 'red' }}>{arr[0]}</h1>
                <p>{detail[0]}</p>
            </div>
            <div>
                <h1 style={{ backgroundColor: 'red' }}>{arr[1]}</h1>
                <p>{detail[1]}</p>
            </div>
            <div>
                <h1 style={{ backgroundColor: 'red' }}>{arr[2]}</h1>
                <p>{detail[2]}</p>
            </div>
        </div >
    );
}
export default Props01;