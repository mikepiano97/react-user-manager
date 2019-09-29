import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: ''
        }
    }
    
    displayBtn(){
        if (this.props.trangThaiForm) {
            return <div className="btn btn-outline-danger" onClick={()=>this.props.doiTrangThaiForm()}> Đóng lại </div>
        } else {
            return <div className="btn btn-outline-primary" onClick={()=>this.props.doiTrangThaiForm()}> Thêm mới </div>
        }
    }

    isChange(event){
        this.props.getTextSearch(event.target.value);
        this.setState({
            textSearch: event.target.value
        });
        
        
    }

    isShowEditUser(){
        if (this.props.editUserState) {
            return <EditUser 
                changeEditUserStatus2={(user)=>this.props.changeEditUserStatus(user)}
                editUserObject={this.props.editUserObject}
                />  
        }
    }

    render() {
        // this.props.editUserState
        return (
            
            <div className="col-12">
                  {
                      this.isShowEditUser()
                  }
                <div className="btn-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nhập họ và tên" 
                        onChange={(event)=>this.isChange(event)}
                        />  
                    <button type="submit" 
                    className="btn btn-info" 
                    onClick={()=>this.props.getTextSearch(this.state.textSearch)}>
                        Tìm
                    </button>
                </div>
                <div className="float-right">
                    {
                        this.displayBtn()
                    }
                    
                </div>
                
                <hr />
            </div>
          
        );
    }
}

export default Search;