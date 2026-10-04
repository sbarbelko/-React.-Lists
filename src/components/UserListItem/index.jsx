import React, { Component } from "react";

class UserListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const users = this.props.users;

    return (
      <ul>
        {users.map((u) => (
          <li>{u.firstName}</li>
        ))}
      </ul>
    );
  }
}

export default UserListItem;
