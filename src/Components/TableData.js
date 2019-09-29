import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    showData(){
        return this.props.data.map((value,key)=>(
            <TableDataRow 
                delFn={(userId)=>this.props.delFn(userId)}
                editFn={(user)=>this.props.editFn(value)}
                value={value} stt={key} key={key} />
        ));
    }

    render() {
        // this.props.editFn()
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ và tên</th>
                        <th>SĐT</th>
                        <th>Quyền</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>

                        {
                            this.showData()
                        }


                    </tbody>
                </table>
                </div>

        );
    }
}

export default TableData;