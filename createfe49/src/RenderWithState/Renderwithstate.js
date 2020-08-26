import React, { Component } from 'react'

export default class Renderwithstate extends Component {
    //quang ly nhung gia tri thay doi tren giao dien
    state = {
        login:false
    }
    //login = false;
    userName = 'Yeu Dai Gia';
    renderlogin = () => {
        if (this.state.login) {
            return <p>Hello {this.userName}</p>
        }
        return <div><button className="btn btn-success" onClick={() => {
            this.handleLogin();
        }}>Dang Nhap</button></div>//goi nhung khong render lai ne dung bien state o dong 5
    }
    handleLogin = () => {
        // this.state.login = true;
        // console.log(this.state.login);
        //khong duoc gan truc tiep nen phai dung setstate
        //setstate la phuong thuc bat dong bo nen gia trij cua login van khong thay doi vif bat dong bo nen khong đợi nó set xong mà chạy qua nó rồi nó mới thực thi xong
        //nen dung phuong thuc nhu sau o dong25
        let newstate={login:true};
        this.setState(newstate,()=>{
            console.log(this.state.login);
        });
        
    }
    render() {
        return (
            <div>
                {/* {this.login?<p>Hello {this.userName}</p>:<div><button className="btn btn-success">Dang Nhap</button></div>} */}
                {this.renderlogin()}
                

            </div>
        )
    }
}
