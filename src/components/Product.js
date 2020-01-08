import React from 'react';

function Product(props) {
    return (
        <div>
            <h4>Name: {props.product.name}</h4>
            <h4>Price: ${props.product.price}</h4>
            <h4>Description: {props.product.description}</h4>
            <button onClick={getInfo.bind(props)}>Get Info!</button>
            <hr />
        </div>
    );
}

function getInfo(){
    alert("The product is " + this.product.name + "\nDESC: " + this.product.description);
}

export default Product;