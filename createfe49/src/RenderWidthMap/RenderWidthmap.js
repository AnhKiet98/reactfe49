import React, { Component } from 'react'
export default class RenderWidthmap extends Component {

    productList = [
        { id: 1, name: 'Iphone X', price: 1000 },
        { id: 1, name: 'Iphone 6', price: 1500 },
        { id: 1, name: 'Iphone 7', price: 2000 },
        { id: 1, name: 'Iphone 8', price: 3000 },
        { id: 1, name: 'Iphone 9', price: 8000 },
        { id: 1, name: 'Iphone 10', price: 90000 },
    ]
    // RenderProduct = () => {
    //     let content = [];
    //     for (let i = 0; i < this.productList.length; i++) {
    //         let product = this.productList[i];
    //         let carProduct = <div key={i} className="col-4">
    //             <div className="card text-left">
    //                 <img className="card-img-top" src="http://picsum.photos/100/150" alt />
    //                 <div className="card-body">
    //                     <h4 className="card-title">{product.name}</h4>
    //                     <p className="card-text">{product.price}</p>
    //                 </div>
    //             </div>
    //         </div>;
    //         content.push(carProduct);
    //     }
    //     console.log(content);
    //     return content;
    // }
    RenderProduct = () => {
        let arrJSXProduct = this.productList.map((product, index) => {
            return <div className="col-4 p-2" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src="http://picsum.photos/100/150" alt />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>

        })
        return arrJSXProduct;
    }
    render() {
        return (
            <div className="container row m-auto">
                {this.RenderProduct()}
            </div>
        )
    }
}
