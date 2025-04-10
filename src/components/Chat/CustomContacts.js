import { borderRadius, styled } from "@mui/system";
import { Stack } from "@mui/material";
import { Skeleton, Avatar } from "@mui/material";

export const Contact = ({
  contact,
  loading,
  cla='',
  onClick=() => {},
  selectedContactId = null,
}) => {
  return (
    <div onClick={onClick} className={`flex flex-row items-center justify-center gap-3 cursor-pointer ` + cla}>
      {loading ? (
        <div>
          <Skeleton variant="circular" animation="pulse">
            <Avatar></Avatar>
          </Skeleton>
        </div>
      ) : (
        <Avatar alt={contact.name} src={contact.avatar}></Avatar>
      )}

      <div
        className={`contact-name w-full flex flex-col justify-start ${
          selectedContactId === contact.id ? "text-black" : "text-[#666666]"
        }`}
      >
        {loading ? (
          <Skeleton>
            <div className="max-w-[200px] w-[200px]">.</div>
          </Skeleton>
        ) : (
          <div className="max-w-[200px] w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
            {contact.name}
          </div>
        )}
        
        {loading ? (
          <Skeleton>
            <div className="text-xs w-[100px]">.</div>
          </Skeleton>
        ) : (
          <div className="text-xs">{contact.online ? "Online" : "Offline"}</div>
        )}
      </div>
    </div>
  );
};

const CustomStack = styled(Stack)(({ theme }) => ({
  height: "100%",
  paddingTop: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: "#cccccc #2d2d2d",
  "&::-webkit-scrollbar": {},
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "red",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "red",
  },
}));

export const Contacts = ({
  contacts,
  loading,
  onEmitEvent,
  selectedContactId,
}) => {

  const handleClick = (id) => {
    console.log('click', id)
    if (!loading) {
      onEmitEvent(id);
    }
  };

  return (
    <CustomStack spacing={1} className="contacts">
      {contacts.map((contact) => (
        <Contact
          onClick={() => handleClick(contact.id)}
          key={contact.id}
          loading={loading}
          contact={contact}
          selectedContactId={selectedContactId}
        />
      ))}
    </CustomStack>
  );
};
