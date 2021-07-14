import React from"react";
import { useHistory } from "react-router";

const BtnGoBack = () => {
  const history = useHistory()
  return <button onClick={history.goBack}>back</button>
}

export default BtnGoBack;