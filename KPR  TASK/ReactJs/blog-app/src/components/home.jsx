import { Card } from 'react-bootstrap';
import image from '../images/blog.jpeg';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home(){
    return(<>
    <div className='homepage'>
      
    <center>
    <div style={{marginTop:'2%'}}>
       <Card style={{width:'45rem',marginTop:'2rem',height:'30rem',color:'white',
      background: '#4776E6', 
      backgroundImage:'linear-gradient(75deg, #8E54E9 40%, #4776E6)',
      borderRadius:'50px', 
       }} >
      <Card.Body>
        <Card.Title><h1>MY BLOG</h1></Card.Title>
        
        <center> <Card.Img variant="" src={image} style={{ height: '300px', width: '500px' ,marginLeft:'0rem'}} /></center>
        <Card.Text>
        
        </Card.Text>
        <Card.Link href='#/create' style={{color:'white'}}>Create New </Card.Link>
      </Card.Body>
    </Card></div></center></div>
    </>)
}