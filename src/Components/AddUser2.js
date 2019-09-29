import React, { Component } from 'react';

class AddUser2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayedBtn: true,
            isDisplayForm: false
        }
    }

    displayForm(){
        if(this.state.isDisplayForm){
            return (
                <div className="card mt-2">
                    <h5 className="card-header">Thêm mới người dùng</h5>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Họ và tên</label>
                            <input type="text" className="form-control" placeholder="Nhập tên người dùng" />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input type="number" className="form-control" placeholder="Nhập số điện thoại" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select custom-select-sm">
                                <option defaultValue="selected">Lựa chọn phân quyền</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Mod</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="btn btn-block btn-primary">
                            Thêm mới
                        </div>
                    </div>
                </div>
                
            )
        }else {
            return;
        }
    }

    isDisplay(){
        this.setState({
            isDisplayedBtn: !this.state.isDisplayedBtn,
            isDisplayForm: !this.state.isDisplayForm
        });
    }

    displayBtn(){
        if (this.state.isDisplayedBtn) {
            return (
                <div 
                className="btn btn-block btn-outline-primary" 
                onClick={()=>this.isDisplay()}
                >
                    Thêm mới
                </div>
            )
        } else {
            return (
                <div 
                className="btn btn-block btn-outline-danger" 
                onClick={()=>this.isDisplay()}
                >
                    Đóng lại
                </div>
            )
        }
    }
    

    render() {
        return (
            <div className="col-3">
                    
                {
                    this.displayBtn()
                }

                {
                    this.displayForm()
                }     
                
            </div>
        );
    }
}

export default AddUser2;