import UserListItem from "../UserListItem";
import React, { Component } from "react";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          firstName: "Анна",
          lastName: "Коваленко",
          age: 24,
          imgSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
        },
        {
          id: 2,
          firstName: "Максим",
          lastName: "Шевченко",
          age: 30,
          imgSrc:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
        },
        {
          id: 3,
          firstName: "Олена",
          lastName: "Бойко",
          age: 28,
          imgSrc:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
        },
        {
          id: 4,
          firstName: "Дмитро",
          lastName: "Ткаченко",
          age: 35,
          imgSrc:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
        },
        {
          id: 5,
          firstName: "Софія",
          lastName: "Кравченко",
          age: 22,
          imgSrc:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
        },
        {
          id: 6,
          firstName: "Андрій",
          lastName: "Мельник",
          age: 41,
          imgSrc:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
        },
      ],
    };
  }

  deleteFromUsers = (id) => {
    const clearUsers = this.state.users.filter((u) => u.id !== id);
    this.setState({ users: clearUsers });
  };

  render() {
    return (
      <ul>
        {this.state.users.map((u) => (
          <UserListItem
            key={u.id}
            users={u}
            deleteFromUsers={this.deleteFromUsers}
          />
        ))}
      </ul>
    );
  }
}

export default Index;
