import React from "react";

export function Product(props) {
    const productName = props.productName;
    const category = props.category;
    const price = props.price;

    return (
        <>
            <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/HKOFQYa.jpeg" alt=""/></div>
            <div className="col">
                <div className="row text-muted">{category}</div>
                <div className="row">{productName}</div>
            </div>
            <div className="col text-center price">{price}</div>
            <div className="col text-end action"><a className="btn btn-small btn-outline-dark" href="src/components/Product">추가</a></div>
        </>
    )
}