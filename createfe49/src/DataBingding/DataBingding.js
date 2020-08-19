import React, { Component } from 'react'

export default class DataBingding extends Component {
    product={
        id:1,
        name:'iphone',
        price:1500
    }
    RenderCard = () => {
        return <div className="card text-left">
            <img className="card-img-top" src="holder.js/100px180/" alt />
            <div className="card-body">
                <h4 className="card-title">{this.product.name}</h4>
                <p className="card-text">{this.product.id}</p>
            </div>
        </div>
    }
    render() {
        let title = 'Hello fe49'
        let photo = 'http://picsum.photos/200/200';
        let Renderimg = () => {
            return <img src='http://picsum.photos/200/200'></img>
        }
        return (
            <div>
                <h1 id="title">{title}</h1>
                {/* <img src={photo} alt=""/> */}
                <div>
                    {Renderimg()}
                </div>
                <div>
                    {this.RenderCard()}
                    {this.product.price}
                </div>
            </div>
        )
    }
}
