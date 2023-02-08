export const userList = ({userList}) => {



    return( 
    <ul className="user-list">
    {userList.map((user) => (
      <li key={v4()}>
        <p>{user}</p>{" "}
        <button data-username={user} type="button" onClick={deleteUser}>
        <FontAwesomeIcon icon={regular("trash-can")} />
        </button>
      </li>
    ))}
  </ul>)
}