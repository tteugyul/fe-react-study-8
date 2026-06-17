import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

// import food1 from '../img/food1.jpg';
// import food2 from '../img/food2.jpg';
// import food3 from '../img/food3.jpg';

function FoodCard({ food, foods, index }) {
    let navigate = useNavigate();
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={'https://localhost:5173/' + food.imgPath} /> */}
            <Card.Img variant="top" src={import.meta.env.BASE_URL + food.imgPath} />
            <Card.Body>
                <Card.Title>{foods[index].title}</Card.Title>
                <Card.Text>{food.content}</Card.Text>
                <Card.Text>{food.price}</Card.Text>
                <Button variant="primary" onClick={() => {
                    navigate("/detail/" + food.id);
                }}>상세보기</Button>
            </Card.Body>
        </Card>
    );
}
export default FoodCard;