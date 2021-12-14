import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Input, ClearButtonP, ButtonSend, Close, Glass } from "./styles";

const Search = () => {
  const [open, setopen] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [sendButton, setsendButton] = useState(false);
    const [glass, setGlass] = useState(true)
  function showSearch(e) {
    e.preventDefault();
    setopen(true);
    if (open === true) {
      document.querySelector(".input_serch_menu").focus();
    } else {
    }
  }
  function cleanSearch(e) {
    e.preventDefault();
    document.querySelector(".input_serch_menu").value = "";
    document.querySelector(".sendButton").classList.toggle("shw");
    setsendButton(false);
    setInputSearch("");
  }
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("enviar", inputSearch);
    setGlass(false)
  };
  const handleChangeText = async (e) => {
    await setInputSearch(e);
    if (e.length > 0 && sendButton === false) {
      setsendButton(true);
      document.querySelector(".sendButton").classList.toggle("shw");
    } else if (e.length === 0 && sendButton !== false) {
      setsendButton(false);
      document.querySelector(".sendButton").classList.toggle("shw");
    }
};
const closeSearch = () => {
    setopen(false);
    setsendButton(false);
  }
  return open === true ? (
    <>
      <Form
        className="form-search flex active"
        action=""
        onSubmit={handleSearch}
      >
        <Input
          type="text"
          name="search"
          placeholder="busca tu coche"
          className="input_serch_menu "
          onChange={(e) => handleChangeText(e.target.value)}
        />
        {sendButton ? (
          <ClearButtonP
            className="center-content clearButton"
            onClick={(e) => cleanSearch(e)}
          >
            <span>X</span>
          </ClearButtonP>
        ) : (
          <></>
        )}
        <ButtonSend className="sendButton" onClick={handleSearch}>
          <FontAwesomeIcon icon={["fas", "paper-plane"]} />
        </ButtonSend>
      </Form>
      <Close className="" onClick={closeSearch}>
        <FontAwesomeIcon icon={["fas", "times"]} />
      </Close>
      {glass ? 
      (
          <Glass className="override"></Glass>
      ):
      (
          <></>
      )
      
    
    }
    </>
  ) : (
    <button className="defaultc center-content pd_2" onClick={(e) => showSearch(e)}>
      <FontAwesomeIcon icon={["fas", "search"]} />
    </button>
  );
};
export default Search;
