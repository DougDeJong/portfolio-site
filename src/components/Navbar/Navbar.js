import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'



class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {};

  }
  
  // componentWillReceiveProps(nextProps) {
  //   this.setState({ loggedInUser: nextProps["userInSession"]})
  // }


  // logout = () =>{
  //   this.service.logout()
  //   .then(()=>{
  //     this.props.setTheUserInTheAppComponent(null)
  //   })
  // }
    
  render(){
      return(
        <nav className="navbar navbar-dark bg-dark">
          <ul className= "navbar-nav navlist">
            </ul>
            <ul className="navbar-nav navlist ml-auto">
            <li className="nav-item active">
            <Link className="nav-item active mr-sm-2" to="/hockey" style={{ textDecoration: 'none' }}><button className = "btn btn-info buttonRound">My Account</button></Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-item active mr-sm-2" to="/posts" style={{ textDecoration: 'none' }}><button className ="btn btn-info buttonRound">Posts</button></Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-item active mr-sm-2" to="/newpost" style={{ textDecoration: 'none' }}><button className ="btn btn-info buttonRound">New Post</button></Link>
            </li>
            <li className="nav-item active">
              <button className="btn btn-info buttonRound" onClick={()=>this.logout()}>Log Out</button>
            </li>
          </ul>
        </nav>
      )
    
    }
    }
  export default Navbar;
