import './Quiz03.css';
function Quiz03() {
    let titleArr = ['피카츄', '파이리', '버터풀', '피죤투', '서로 생긴 모습은 달라도']
    let textArr = ['라이츄', '꼬부기', '야도란', '또가스', '우리는 모두 친구 (맞아)']
    return (
        <div className="App">
            {
                titleArr.map((title, index) => {
                    return (
                        <Haha title={title} text={textArr[index]} key={index} />
                    );
                })
            }
        </div>
    );
}
function Haha({ title, text }) {
    return (
        <div>
            <p className='title'>{title}</p>
            <p className='textItem'>{text}</p>
        </div>
    );
}
export default Quiz03;