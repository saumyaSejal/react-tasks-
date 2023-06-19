import React, { Component } from 'react';

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { users, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default UserTable;
