import React, { Component } from 'react'
import Child from './Child'

export default class styling extends Component {
    render() {
        return (
            <div>
                <Child />
                <p className="abc">class title</p>
                <p className="contenta">class title</p>
            </div>
        )
    }
}
