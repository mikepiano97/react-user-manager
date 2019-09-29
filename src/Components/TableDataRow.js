import React, { Component } from 'react';

class TableDataRow extends Component {
    showPermission(){
        switch (this.props.value.permission) {
            case 1:
                return "Admin"
                break;
            case 2:
                return "Moderator"
                break;
            case 3:
                return "Normal User"
                break;
            default:
                break;
        }
    }

    render() {
        // this.props.editFn2
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.value.name}</td>
                <td>{this.props.value.tel}</td>
                <td>{
                    this.showPermission()
                }</td>
                <td>
                <div className="btn-group">
                    <div 
                        onClick={()=>this.props.editFn()}
                        className="btn btn-warning"
                    ><i className="fa fa-edit"> Sửa </i></div>
                    <div 
                        onClick={(userId)=>this.props.delFn(this.props.value.id)}
                        className="btn btn-danger">
                            <i className="fa fa-delete"> Xoá </i>
                    </div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;