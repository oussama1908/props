import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Player = ({ player }) => {
  const { name, team, nationality, jerseyNumber, age, imageUrl } = player;
console.log(player);
console.log(name, team, nationality, jerseyNumber, age, imageUrl );
  return (
    <Card style={{ width: "18rem", margin: "10px", padding: "10px" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
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
