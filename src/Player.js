import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Player = ({ player }) => {
  console.log(typeof player)
  const { name, team, nationality, jerseyNumber, age, imageUrl } = player;
console.log(player);
console.log(name, team, nationality, jerseyNumber, age, imageUrl );
  return (
    <Card class="card" style={{ width: "18rem", margin: "10px", padding: "10px"  }}>
      <Card.Img style={{ width:"17rem" , height:"18rem"}} variant="top" src={imageUrl} />
      <Card.Body  class="container">
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
        <Button variant="warning">Details</Button>
      </Card.Body>
    </Card>
  );
};

export default Player;
