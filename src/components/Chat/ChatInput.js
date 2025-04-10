import "./Chat.scss";
import { Button, Stack } from "@mui/material";
import {Input }from "@mui/material";
import { useState, useRef, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import ArticleIcon from "@mui/icons-material/Article";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { IconButton } from "@mui/material";
import { AudioVisualizer, LiveAudioVisualizer } from "react-audio-visualize";
import CustomAudioVisualizer from "./CustomAudioVisualizer";

const ChatInput = () => {
  const chatContainerRef = useRef(null)

  const [maxHeight, setMaxHeight] = useState(null)

  const [mic, setMic] = useState(true)

  const [deleteAnimation, setDeleteAnimation] = useState(false)
  const [micAnimation, setMicAnimation] = useState(false)

  useEffect(() => {
    if (chatContainerRef.current) {
      const containerHeight = chatContainerRef.current.offsetHeight;
      setMaxHeight(containerHeight);
    }
  }, []);

  const getRandomId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 1_000_000)}`;
  };

  const [messages, setMessages] = useState([
    { id: getRandomId(), value: "dsafd", sender: "me" },
  ]);

  const handleInput = (e) => {
    // const newMessage = { id: getRandomId(), value: e.target.value };
    // setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      const inputValue = e.target.value.trim();

      if (inputValue) {
        const newMessage = { id: getRandomId(), value: inputValue };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        e.target.value = "";
      }
    }
  };

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages])

  const handleMicChange = () => {

    if (mic) {
      setMic(false)
    } else {

      setDeleteAnimation(true)

      setTimeout(() => {
        setDeleteAnimation(false)
        setMic(true)
        setMicAnimation(true)
      }, 1500)

    }

  }

  return (
    <Stack className="bg-[#cccccc] p-3 h-full overflow-hidden">
      <Stack
        spacing={1}
        ref={chatContainerRef}
        className="message-screen overflow-y-auto flex flex-col justify-start h-full pt-1 pb-2 scrollbar-hidden"
      >
        {messages.map((message) => (
          <div key={message.id} className="w-full flex flex-row justify-end">
            <div className="bg-[#666666] p-2 rounded-2xl text-white w-fit">
              {message.value}
            </div>
          </div>
        ))}
      </Stack>
      <Stack className="bg-white p-2 rounded-xl" direction="row" spacing={1}>
        <InputButton children={<ArticleIcon />} />
        <Input
          className="w-full flex-grow"
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder="Type something..."
        />
        {/* <CustomAudioVisualizer /> */}
        <InputButton
          error={!mic}
          onClick={() => handleMicChange()}
          children={
            mic ? (
              <MicIcon className={`${micAnimation ? 'rotate-y' : ''}`} />
            ) : (
              <DeleteOutlineTwoToneIcon className={`text-red-500 ${deleteAnimation ? 'fall-animation' : ''}`} />
            )
          }
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </Stack>
  );
};

const InputButton = ({ children, error = false, onClick }) => {
  return (
    <div onClick={onClick} className="flex items-center text-[#666666] cursor-pointer">
      <IconButton color={error ? "error" : ""}>{children}</IconButton>
    </div>
  );
};

const MyAudioVisualizer = () => {

  const [mediaRecorder, setMediaRecorder] = useState(null)
  const visualizerRef = useRef(null)

  navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {

    const mediaRecorder = new MediaRecorder(stream)
    setMediaRecorder(mediaRecorder)
    mediaRecorder.start()
    // const audioChunks = []
    // mediaRecorder.addEventListener('dataavailable', (event) => {
    //   audioChunks.push
    // })

  }).catch(error => {
    console.log('Error accesing microphone', error)
  })

  return (
    <div>
      {mediaRecorder && (
        <LiveAudioVisualizer
          ref={visualizerRef}
          mediaRecorder={mediaRecorder}
          width={500}
          height={75}
          barWidth={1}
          gap={0}
          barColor={"#f76565"}
        />
      )}
    </div>
  );
};

export default ChatInput;
