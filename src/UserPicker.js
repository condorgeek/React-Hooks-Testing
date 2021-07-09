import useLocalStorage from "./UseLocalStorage";

const users = ["John", "Tom", "Ana", "Jennifer"];
const UserPicker = () => {
  const [user, setUser] = useLocalStorage("user", "Tom");

  return (
    <div>
      <select value={user} onChange={(e) => setUser(e.target.value)}>
        {users.map((user) => {
          return <option>{user}</option>;
        })}
      </select>
    </div>
  );
};
export default UserPicker;
