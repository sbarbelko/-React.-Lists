import React, { Component } from "react";
import styles from "./UserListItem.module.css";

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
          <li className={styles.container} key={u.id}>
            <img src={u.imgSrc} alt={u.firstName} />

            <h1>{`${u.firstName} ${u.lastName}`}</h1>
            <span>{u.age}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default UserListItem;
