import React, { Component } from 'react'
import "./Styling.scss"//anh huong toan the
import style from "./Styling.module.scss"//anh huong 1 file
export default class Child extends Component {
    render() {
        return (
            <div>
                <div className={`${style.contenta}`}>
                    <p className={`${style.text}`}>3456789</p>
                    {/* Chỉ file con child bị ảnh hưởng */}
                    class child
                </div>
                <div>
                    <p style={{ border: '1px solid red', background: 'red' }}>
                        Hello cybersoft
                </p>
                </div>
            </div>
        )
    }
}
