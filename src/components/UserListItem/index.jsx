import styles from "./UserListItem.module.css";

export default function UserListItem(props) {
  const users = props.users;

  function deleteUser(id) {
    props.deleteFromUsers(id);
  }

  return (
    <ul>
      {users.map((u) => (
        <li className={styles.container} key={u.id}>
          <img src={u.imgSrc} alt={u.firstName} />
          <div>
            <h1>{`${u.firstName} ${u.lastName}`}</h1>
            <span>{u.age}</span>
          </div>
          <button onClick={() => deleteUser(u.id)}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </li>
      ))}
    </ul>
  );
}
