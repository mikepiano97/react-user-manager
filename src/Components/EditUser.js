import React, { Component } from 'react';

class EditUser extends Component {
    // this.props.changeEditUserStatus2()
    // this.props.editUserObject
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editUserObject.id,
            name: this.props.editUserObject.name,
            tel: this.props.editUserObject.tel,
            permission: this.props.editUserObject.permission
        }
    }

    isChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    
    render() {
        return (
            <div className="col mb-5">
                    <form>    
                    <div className="card mt-2 bg-warning">
                        <h5 className="card-header">Sửa thông tin người dùng</h5>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Họ và tên</label>
                                <input
                                    onChange={(event)=>this.isChange(event)}
                                    defaultValue={this.props.editUserObject.name} 
                                    name="name"
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nhập tên người dùng" />
                            </div>
                            <div className="form-group">
                                <label>Số điện thoại</label>
                                <input 
                                    onChange={(event)=>this.isChange(event)}
                                    defaultValue={parseInt(this.props.editUserObject.tel)} 
                                    name="tel"
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Nhập số điện thoại" />
                            </div>
                            <div className="form-group">
                                <select 
                                onChange={(event)=>this.isChange(event)}
                                className="custom-select custom-select-sm" 
                                name="permission"
                                defaultValue={this.props.editUserObject.permission}
                                >
                                    <option>Lựa chọn phân quyền</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Mod</option>
                                    <option value="3">Normal</option>
                                </select>
                            </div>
                            <input
                                onClick={(user)=>this.props.changeEditUserStatus2(this.state)}
                                type="reset" 
                                className="btn btn-block btn-danger"
                                value="Lưu"
                            />
                        </div>
                    </div>
                    </form>
                </div>
        );
    }
}

export default EditUser;