import RestaurantPictire from '../Pictures/jason-leung-poI7DelFiVA-unsplash.jpg';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button
} from 'reactstrap';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="homepage-container">
            <img src={RestaurantPictire} className="header-image"/>
            <div className="slogan-container" style={{ width: '950px', height: '250px', backgroundColor: '#212529',
    border: '0px solid black',
  }}>
                <h1 className="slogan">Discover NYC's Culinary Delights: Uncover Restaurant Gems with Confidence – Where Transparency Meets Taste!</h1>
                <Link to='/search'><Button>Browse Here</Button></Link>
            </div> 
        </div>
    );
};

export default Home;