import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        imgCar: './img/CarBasic/products/black-car.jpg'
    }


    handelChangeColorcar = (imgColor) => {
        this.setState({
            imgCar:`./img/CarBasic/products/${imgColor}-car.jpg`
        })
    }




    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-8">
                        <img style={{ width: '100%' }} src={this.state.imgCar}></img>
                    </div>
                    <div className="col-4 border pt-2">

                        <div>
                            <p className="text-left bg-secondary border p-1 text-primary">ExterColor</p>
                        </div>

                        <div className="d-flex border mb-1 mt-2 p-2" onClick={() => {
                            this.handelChangeColorcar('black');
                        }}>
                            <img style={{ width: '14%', height: '10%', cursor: "pointer" }} src="./img/CarBasic/icons/icon-black.jpg" alt="" className="mr-2" />
                            <div className="d-flex flex-column">
                                <div>
                                    <p className="mb-0">Crystal Black</p>
                                    <p className="text-left mb-0">Peari</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex border mb-1 mt-2 p-2" onClick={() => {
                            this.handelChangeColorcar('steel');
                        }}>
                            <img style={{ width: '14%', height: '10%', cursor: "pointer" }} src="./img/CarBasic/icons/icon-steel.jpg" alt="" className="mr-2" />
                            <div className="d-flex flex-column">
                                <div>
                                    <p className="mb-0">Modern Stell</p>
                                    <p className="text-left mb-0">Metalic</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex border mb-1 mt-2 p-2" onClick={() => {
                            this.handelChangeColorcar('silver');
                        }}>
                            <img style={{ width: '14%', height: '10%', cursor: "pointer" }} src="./img/CarBasic/icons/icon-silver.jpg" alt="" className="mr-2" />
                            <div className="d-flex flex-column">
                                <div>
                                    <p className="mb-0">Lunar Sliver</p>
                                    <p className="text-left mb-0">Metalic</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex border mb-1 mt-2 p-2" onClick={() => {
                            this.handelChangeColorcar('red');
                        }}>
                            <img style={{ width: '14%', height: '10%', cursor: "pointer" }} src="./img/CarBasic/icons/icon-red.jpg" alt="" className="mr-2" />
                            <div className="d-flex flex-column">
                                <div>
                                    <p className="mb-0">Larrye Red</p>
                                    <p className="text-left mb-0">Metalic</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}
