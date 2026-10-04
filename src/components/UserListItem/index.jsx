import styles from "./UserListItem.module.css";

export default function UserListItem(props) {
  const { id, firstName, lastName, age, imgSrc } = props.users;

  return (
    <li className={styles.container}>
      <img src={imgSrc} alt={firstName} />
      <div>
        <h1>{`${firstName} ${lastName}`}</h1>
        <span>{age}</span>
      </div>
      <button onClick={() => props.deleteFromUsers(id)}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </li>
  );
}
