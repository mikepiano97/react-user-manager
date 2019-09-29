import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission:""
        }
    }

    isChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    kiemTraTrangThaiForm(){
        if (this.props.trangThaiForm) {
            return (
                <div className="col-xs-12 col-md-3">
                    <form>    
                    <div className="card mt-2">
                        <h5 className="card-header">Thêm mới người dùng</h5>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Họ và tên</label>
                                <input 
                                    name="name"
                                    onChange={(event)=>this.isChange(event)}
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nhập tên người dùng" />
                            </div>
                            <div className="form-group">
                                <label>Số điện thoại</label>
                                <input 
                                    name="tel"
                                    onChange={(event)=>this.isChange(event)}
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Nhập số điện thoại" />
                            </div>
                            <div className="form-group">
                                <select 
                                className="custom-select custom-select-sm" 
                                name="permission"
                                onChange={(event)=>this.isChange(event)}
                                >
                                    <option defaultValue="selected" value="0">Lựa chọn phân quyền</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Mod</option>
                                    <option value="3">Normal</option>
                                </select>
                            </div>
                            <input
                                onClick={(name, tel, permission)=>this.props.layDuLieuAddUser(this.state.name, this.state.tel, this.state.permission)} 
                                type="reset" 
                                className="btn btn-block btn-primary"
                                value="Thêm mới"
                            />
                        </div>
                    </div>
                    </form>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
    

    render() {
        return (
            this.kiemTraTrangThaiForm()
        );

        
    }
}

export default AddUser;