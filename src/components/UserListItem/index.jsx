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
          <li key={u.id}>
            <img src={u.imgSrc} alt={u.firstName} />
            <div>
              <h1>{`${u.firstName} ${u.lastName}`}</h1>
              <span>{u.age}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default UserListItem;
