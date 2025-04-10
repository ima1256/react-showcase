import "./Trivial.scss";
import { Stack, Typography } from "@mui/material";
import { fetchQuestions } from "../../utilities";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardActions, Button } from "@mui/material";
import he from "he";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import html2canvas from "html2canvas";

const Trivial = () => {

  const domtoimage = window.domtoimage

  const theme = useTheme();

  const blinkSuccess = keyframes`
    from {
      background-color: '#cccccc';
    }
    to {
      background-color: ${theme.palette.success.light}
    }
  `;

  const [questions, setQuestions] = useState([]);

  const questionIndex = useRef(0);

  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetchQuestions("https://opentdb.com/api.php?amount=10&type=multiple").then(
      (qs) => {
        setQuestions(qs.results);
        setQuestion(qs.results[questionIndex.current]);
      }
    );
  }, []);

  const [answers, setAnswers] = useState([]);

  const [selectedAnswer, setSelectedAnswer] = useState(0);

  useEffect(() => {
    if (question) {
      setAnswers(question.incorrect_answers.concat(question.correct_answer));
    }
  }, [question]);

  const [nextQuestion, setNextQuestion] = useState(null);

  const goToNextQuestion = () => {
    setNextQuestion(true);

    setTimeout(() => {
      setNextQuestion(false);
      if (questionIndex.current === questions.length - 1) {
        questionIndex.current = 0;
      } else {
        questionIndex.current += 1;
      }

      setQuestion(questions[questionIndex.current]);
    }, 3000);
  };

  const [cardImage, setCardImage] = useState(null)
  const cardRef = useRef(null)

  const breakCard = () => {

    // domtoimage.toPng(cardRef.current).then(dataUrl => {
    //   console.log(dataUrl)
    // })

    html2canvas(cardRef.current, {scale: 2, useCORS: true, logging: true}).then(canvas => {
      console.log(canvas.toDataURL())
    })
    // const cardRect = cardRef.current.getBoundingClientReact()
    // console.log(cardRect)

  }

  return (
    <Stack
      direction="column"
      className="trivial-wrapper flex items-center justify-center"
    >
      {question && (
        <Card
          sx={{
            padding: "5px",
            maxWidth: "50%",
          }}
          className={`rounded-xl ${
            nextQuestion ? "next-question-transition" : ""
          }`}
          ref={cardRef}
          onClick={() => breakCard()}
        >
          <CardContent className="text-[#666666]" sx={{ paddingBottom: "0px" }}>
            <div className="question font-bold text-xl">
              {he.decode(question.question)}
            </div>
            <Stack className="p-5" spacing={1}>
              {answers.map((answer, index) => (
                <Typography
                  key={index}
                  onClick={() => setSelectedAnswer(index)}
                  sx={{
                    animation:
                      nextQuestion && selectedAnswer == index
                        ? `${blinkSuccess} ease 0.1s 1s 10 forwards`
                        : "none",
                    fontFamily: "inherit",
                    fontWeight: "bold",
                    color: theme.palette.secondary.contrastText,
                    backgroundColor: nextQuestion
                      ? selectedAnswer === index
                        ? theme.palette.secondary.dark
                        : "none"
                      : selectedAnswer === index
                      ? theme.palette.secondary.dark
                      : theme.palette.secondary.light,
                  }}
                  className={`answer cursor-pointer text-center rounded-xl text-white p-1`}
                >
                  {answer}
                </Typography>
              ))}
            </Stack>
          </CardContent>
          <CardActions
            className="pr-5"
            sx={{ paddingTop: "0px", justifyContent: "end" }}
          >
            <Button onClick={() => goToNextQuestion()}>Next</Button>
          </CardActions>
        </Card>
      )}
    </Stack>
  );
};

export default Trivial;
