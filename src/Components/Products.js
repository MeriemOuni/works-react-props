import React from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css";

const Products = (props) => {
	const HandleName = (title) => alert(`The product mark is ${props.title}`);
	// console.log(props);
	return (
		<div>
			<div>
				<Card style={{ width: "18rem" }}>
					<Card.Img variant='top' src={props.image} />
					<Card.Body>
						<Card.Title>{props.title}</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant='primary' onClick={HandleName}>
							Go somewhere
						</Button>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default Products;
