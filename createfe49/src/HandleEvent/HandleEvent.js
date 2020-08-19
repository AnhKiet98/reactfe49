import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick = () => {
        alert('Hello');
    }
    Showinfor = (name) => {
        alert(`'name ${name}`)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <button onClick={() => {
                    alert('ccc');
                }}>Click me</button>

                <button onClick={() => {
                    this.Showinfor('Yeu dai gia')
                }}>Click me</button>
                <button onClick={this.Showinfor.bind(this,'abc')}>ccc me</button>
                {/* call back function khong can ngoac neu co ngoac thi se goi ngay lap tuc */}
            </div>
        )
    }
}
