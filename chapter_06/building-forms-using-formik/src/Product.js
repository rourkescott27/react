import React, { Component } from "react";
import Rating from "./Rating";
import Card from 'react-bootstrap/Card';

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        className="mr-3"
                        variant="top"
                        src={this.props.data.imageUrl}
                        // height={64}
                        // width={64}
                        alt="Image"
                    />
                    <Card.Body>
                        <h5>{this.props.data.productName}</h5>
                        {this.props.data.releasedDate}
                        <Rating
                            rating={this.props.data.rating}
                            numOfReviews={this.props.data.numOfReviews}
                        />
                        <p>{this.props.data.description}</p>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Product; 