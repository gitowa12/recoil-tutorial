import "./InputTask.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { inputTitleState } from "../states/inputTitle";
import { useCallback, useRef } from "react";
import { addTitleState } from "../states/addTitleState";

const getKey = () => Math.random().toString(32).substring(2);

const InputTask = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  // const inputTitle = useRecoilValue(inputTitleState);
  const [addTitle, setAddTitle] = useRecoilState(addTitleState);

  const handleClick = () => {
    if (inputEl.current === null) return;
    setAddTitle([...addTitle, { id: getKey(), title: inputEl.current.value }]);
    // setInputTitle("");
    inputEl.current.value = "";
    console.log(addTitle);
  };

  return (
    <div className="inputField">
      <input ref={inputEl} type="text" className="inputTitle" />
      <button type="button" className="addButton" onClick={handleClick}>
        追加
      </button>
    </div>
  );
};

export default InputTask;
