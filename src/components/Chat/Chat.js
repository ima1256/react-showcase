import "./Chat.scss";
import { useDispatch, useSelector } from "react-redux";
import { increaseMessages } from "../../redux/messagesSlice";
import { useEffect, useState } from "react";
import { Avatar, Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { UNSPLASH_ACCESS_KEY } from "../../constants";
import { Skeleton } from "@mui/material";
import { Contacts, Contact } from "./CustomContacts";
import ChatInput from "./ChatInput";
import Status from "./Status";

const Chat = () => {

  const saveInLocalStorage = (name, value) => {
    // JSON.parse(localStorage.getItem("contacts"));
    //localStorage.setItem("myObject", JSON.stringify(contacts));
  }



  const theme = useTheme();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const [selectedContactId, setSelectedContactId] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null)

  const [contacts, setContacts] = useState([]);

  const increase = () => {
    dispatch(increaseMessages());
  };

  const handleClickInContact = (contactId) => {
    setSelectedContactId(contactId)
  }

  useEffect(() => {
    setSelectedContact(contacts.find((contact) => contact.id === selectedContactId))
  }, [selectedContactId])

  useEffect(() => {
    
    if (contacts.length > 0) {
  
      setSelectedContactId(contacts[0].id)
      setSelectedContact(contacts.find((contact) => contact.id === contacts[0].id))
      setLoading(false)

    }
  }, [contacts]);

  useEffect(() => {

    fetchProfileImages().then(data => {

      setContacts(

        Array.from({ length: 30 }, (_, index) => {
          return {
            id: `${Date.now()}-${Math.floor(Math.random() * 1_000_000)}`,
            avatar: data[index].urls.thumb,
            name: faker.person.firstName() + " " + faker.person.lastName(),
            online: Math.random() < 0.5,
          };
        })

      )

    })

    const handleSpace = (event) => {
      if (event.code === "Space" || event.key === " ") {
        increase();
      }
    };

    window.addEventListener("keydown", handleSpace);

    return () => {
      window.removeEventListener("keydown", handleSpace);
    };
  }, []);

  const fetchProfileImages = async () => {

    let avatars = JSON.parse(localStorage.getItem('avatars'))

    if (!avatars) {

      const response = await fetch(
        `https://api.unsplash.com/photos/random?query=face&count=${30}&client_id=${UNSPLASH_ACCESS_KEY}`
      )

      avatars = await response.json()
      localStorage.setItem('avatars', JSON.stringify(avatars))

    }

    return avatars
  };

  return (
    <Box
      className="flex w-full flex-row items-start justify-between"
      sx={{
        height: "calc(100vh - 64px)",
      }}
    >
      
      <Contacts
        onEmitEvent={handleClickInContact}
        contacts={contacts}
        loading={loading}
        selectedContactId={selectedContactId}
      />

      <Stack
        sx={{
          flexGrow: 1,
          height: "calc(100vh - 64px)",
        }}
        className="h-full flex flex-col justify-end"
      >
        <div className="contact-highlight p-2">
          {selectedContactId && <Contact
            cla="scale-200"
            loading={loading}
            contact={
              selectedContact
            }
          />}
         
        </div>

        <ChatInput contacts={contacts} selectedContactId={selectedContactId} />
      </Stack>
    </Box>
  );
};

export default Chat;
