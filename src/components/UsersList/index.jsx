import React from "react";
import UserListItem from "../UserListItem";

export default function UsersList() {
  const users = [
    {
      id: 1,
      firstName: "Анна",
      lastName: "Коваленко",
      age: 24,
      gender: "female",
      email: "anna.kovalenko@example.com",
      imgSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
      isSelected: false,
    },
    {
      id: 2,
      firstName: "Максим",
      lastName: "Шевченко",
      age: 30,
      gender: "male",
      email: "max.shevchenko@example.com",
      imgSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
      isSelected: false,
    },
    {
      id: 3,
      firstName: "Олена",
      lastName: "Бойко",
      age: 28,
      gender: "female",
      email: "olena.boyko@example.com",
      imgSrc:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
      isSelected: false,
    },
    {
      id: 4,
      firstName: "Дмитро",
      lastName: "Ткаченко",
      age: 35,
      gender: "male",
      email: "dmytro.tkachenko@example.com",
      imgSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
      isSelected: false,
    },
    {
      id: 5,
      firstName: "Софія",
      lastName: "Кравченко",
      age: 22,
      gender: "female",
      email: "sofiya.kravchenko@example.com",
      imgSrc:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
      isSelected: false,
    },
    {
      id: 6,
      firstName: "Андрій",
      lastName: "Мельник",
      age: 41,
      gender: "male",
      email: "andriy.melnyk@example.com",
      imgSrc:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
      isSelected: false,
    },
  ];
  return <UserListItem users={users} />;
}
