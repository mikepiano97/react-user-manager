import React, {Component} from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import Data from './db.json';

const uuidv1 = require('uuid/v1');


class App extends Component {
  constructor(props) {
    super(props);
    
    if (localStorage.getItem('dataUser') === null) {
      localStorage.setItem('dataUser', JSON.stringify(Data));
    }

    this.state = {
      trangThaiForm: false,
      data: JSON.parse(localStorage.getItem('dataUser')),
      textSearch: '',
      editUserState: false,
      editUserObject: {}
    }
  }
  
  layDuLieuAddUser(name, tel, permission){
    
    var item = {};
        item.id = uuidv1();
        item.name = name;
        item.tel = tel;
        item.permission = parseInt(permission);
    
        
    var items = this.state.data;
    items.push(item);

    this.setState({
      data: items
    });
  
    // luu thong tin vao localStorage
    localStorage.setItem('dataUser', JSON.stringify(items));
  }

  doiTrangThaiForm(){
    this.setState({
      trangThaiForm: !this.state.trangThaiForm
    });
  }

  getTextSearch(dl){
    this.setState({
      textSearch: dl
    });

    var ketqua = [];
    this.state.data.forEach((item)=>{
      if (item.name.toLowerCase().indexOf(this.state.textSearch.toLowerCase()) !== -1) {
        ketqua.push(item); 
      }
    });

    // update render
    this.setState({
      data: ketqua
    });

  }

  editFn(user){
    this.setState({
      editUserState: true,
      editUserObject: user
    });

  }

  changeEditUserStatus(user){
    this.setState({
      editUserState: false
    });

    this.state.data.forEach((value, key)=>{
      if (value.id === user.id) {
        value.name = user.name;
        value.tel = user.tel;
        value.permission = user.permission;
      }
    });

    // cap nhat vao localStorage
    localStorage.setItem('dataUser', JSON.stringify(this.state.data));
  }

  delFn(userId){
    var newdata = this.state.data.filter((item)=>{
      return item.id !== userId;
    });

    // render update
    this.setState({
      data: newdata
    });

    // cap nhat vao localStorage
    localStorage.setItem('dataUser',JSON.stringify(newdata));
  }

  render(){
    
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
              <div className="row">
                <Search
                  editUserObject={this.state.editUserObject} 
                  changeEditUserStatus={(user)=>this.changeEditUserStatus(user)}
                  editUserState={this.state.editUserState}
                  getTextSearch={(dl)=>this.getTextSearch(dl)}
                  doiTrangThaiForm={()=>this.doiTrangThaiForm()} 
                  trangThaiForm={this.state.trangThaiForm}
                />
                <TableData 
                  delFn={(userId)=>this.delFn(userId)}
                  editFn={(user)=>this.editFn(user)}
                  data={this.state.data}/>
                <AddUser 
                  layDuLieuAddUser={(name, tel, permission)=>this.layDuLieuAddUser(name, tel, permission)}
                  trangThaiForm={this.state.trangThaiForm}/>
              </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
