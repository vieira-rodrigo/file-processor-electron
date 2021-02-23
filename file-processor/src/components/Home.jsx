import React, { createRef, useState } from "react";
import Pill from "./Pill";
import { Button, Container, Form, FileInput } from "./Styled";

export default function Home() {
  const [disabled, setDisabled] = useState(true);
  const [wordsMap, setWordsMap] = useState([]);
  let input = createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    process(input.current.files[0].path);
  };

  const handleProcessFinished = (event, wordsMap) => {
    console.log("wordsMap: " + JSON.stringify(wordsMap));
    setWordsMap(wordsMap);
  };

  const process = (filePath) => {
    console.log("process file: " + filePath);
    window.ipcRenderer.send("PROCESS_FILE", filePath);
    window.ipcRenderer.on("PROCESS_FILE", handleProcessFinished);
  };

  const handleChange = (e) => {
    setDisabled(false);
    setWordsMap([]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FileInput
          type="file"
          accept="text/html,.txt,.csv"
          ref={input}
          onChange={handleChange}
        />
        <Button type="submit" disabled={disabled}>
          Process
        </Button>
      </Form>
      <Container>
        {wordsMap.map((word) => {
          return <Pill key={word} {...word} />;
        })}
      </Container>
    </>
  );
}
