import Card from "../Card/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Loading from "../Loading/Loading";
import { getUsers, addUser } from "../../services/users";
import { useEffect, useState } from "react";
import cryptoRandomString from 'crypto-random-string';

const Home = () => {
  const [users, setUsers] = useState([]);

  const [addingUser, setAddingUser] = useState(false);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const newUser = {
    name: "Imanol",
    email: "imanol@example.com"
  };

  const handleAddUser = async () => {
    setAddingUser(true);
    try {
      await addUser(newUser);
    } catch (err) {
      console.log(err);
    } finally {
      setAddingUser(false);
    }
  };

  return (
    <div className="relative my-0 mx-auto flex w-4/5 flex-col items-center justify-center">
      {/* <h2 className="font-bold block text-[#cccccc] text-5xl font-digital mb-3">
                Welcome to the Home Page bro!
            </h2> */}

      <button onClick={() => handleAddUser()}>
        {addingUser ? "Adding..." : "Add user"}
      </button>

      <Card name={"imanol"} email={"imanol@gmail.com"} phone={"+34627188777"} />
    </div>
  );
};

export default Home;
