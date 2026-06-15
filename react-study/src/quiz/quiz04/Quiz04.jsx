import '../../../newsblog/NewsBlog.css';
import { useState } from 'react';
import Modal from '../../../newsblog/Modal';
function Quiz04() {
    let title = 'React Study';//useState('React Study');
    // let [news1, setNews1] = useState('어제의 뉴스');
    // let [news2, setNews2] = useState('오늘의 뉴스');
    // let [news3, setNews3] = useState('내일의 뉴스');
    let [news, setNews] = useState(['어제의 뉴스', '오늘의 뉴스', '내일의 뉴스']);
    let [likeCount, setLikeCount] = useState([0, 0, 0]);
    let [modalFlag, setModalFlag] = useState(false);
    return (
        <div>
            <div className='black-nav'>
                <h3>Blog Header</h3>
                {/* <div>React Study</div> */}
                <div style={{ color: "orange", fontSize: '20px' }}>{title}</div>
            </div>
            {
                news.map((news, index) => {
                    return (
                        <Haha
                            a={news}
                            b={likeCount[index]}
                            key={index}
                            c={() => {
                                let d = [...likeCount];
                                d[index]++;
                                setLikeCount(d);
                            }}
                        />
                    )
                })
            }
        </div>

    );
}
function Haha({ a, b, c }) {
    return (
        <div className='post-list'>
            <h4>{a}
                <span onClick={c}>★</span> {b}
            </h4>
            <p>내용자리</p>
        </div >
    );
}
export default Quiz04;