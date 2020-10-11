import React from 'react';
import UserList from '../../components/Users/UserList';
import UserAddForm from '../../components/UserAddForm/UserAddForm';
import PostList from '../../components/Posts/PostList';
import ProfilePicture from '../../assets/images/profile.png';
import { connect } from 'react-redux';
import { changeBackgroundColor } from '../../redux/actions/ColorAction';
import { changeTextColor } from '../../redux/actions/ColorAction';
import './Home.css'

class Home extends React.Component {
    constructor() {
      super();
      this.state = {
        users: [],
        posts: [],
        isDisplayed: 'users'
      };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 7);
        data.forEach(user => {
          user.isGoldClient = false;
          user.salary = Math.floor(Math.random() * 8001 + 2000);
          user.image = ProfilePicture;
        });
        this.setState({users: data});
      })
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => { 
        data = data.filter(post => post.id < 4);
        this.setState({posts: data});
      })
  }

  handleShowUsers() {
    this.setState({isDisplayed: 'users'});
  }

  handleShowPosts() {
    this.setState({isDisplayed: 'posts'});
  }

  getMaxId(users) {
    let maxId = 0;
    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });
    return maxId;
  }

  submitAddForm(event, name, email, isGoldClient, checkName) {
    event.preventDefault();
    if(checkName(name) === true) {
      alert('Numele contine numere sau lungimea lui nu depaseste 5 caractere!!!');
    }
    else {
      this.setState(prevState => {
        return {
          users: [
            ...prevState.users,
            {
              id: this.getMaxId(prevState.users) + 1,
              name,
              email,
              isGoldClient,
              salary : Math.floor(Math.random() * 8001 + 2000),
              image : ProfilePicture
            }
          ]
        }
      });
    }
  }

  deleteUser(event, id) {
    const users = this.state.users.filter(user => user.id !== id);
    this.setState({users});
  }

    render() {
        return(
          <div className="home" style={{background: this.props.backgroundColor, color: this.props.textColor}}>
              
              <div className="container-fluid">
                  <div className="d-flex border border-primary flex-column align-items-center text-center p-5">
                    <h1>Admin panel - Proiectul 1</h1>
                    <UserAddForm submitAddForm={(event, name, email, isGoldClient, checkName) => this.submitAddForm(event, name, email, isGoldClient, checkName)}/>
                  </div>
              </div>
                  
              <div>
                  {
                      this.state.isDisplayed === 'users'
                      ? <div className="container-fluid">
                          <h2 className="mt-5 text-center">Lista utilizatorilor:</h2>
                          <UserList users={this.state.users} deleteUser={(event, id) => this.deleteUser(event, id)}/>
                        </div>
                      : <div>
                          <h2 className="mt-5 text-center">Lista postarilor:</h2>
                          <PostList posts={this.state.posts}/>
                        </div> 
                  } 
              </div>
              
              <div className="d-flex text-center align-items-center flex-column my-2">
                  <label className="h4" htmlFor="change-color">Schimba culoarea background-ului:</label>
                  <input id="change-color" type="color" value="#FFFFFF" onChange={(event) => this.props.changeBackgroundColor({color: event.target.value})} />
                  <label className="h4" htmlFor="change-text-color">Schimba culoarea textului:</label> 
                  <input id="change-text-color" type="color" onChange={(event) => this.props.changeTextColor({textColor: event.target.value})}/>
              </div>
              
              <div className="footer-buttons btn-group btn-group-lg my-2 w-100">
                  <button className="btn btn-secondary" onClick={() => this.handleShowUsers()}>Afiseaza useri</button>
                  <button className="btn btn-secondary" onClick={() => this.handleShowPosts()}>Afiseaza postari</button>
              </div>

          </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    backgroundColor: state.color,
    textColor: state.textColor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeBackgroundColor: (payload) => dispatch(changeBackgroundColor(payload)),
    changeTextColor: (payload) => dispatch(changeTextColor(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);