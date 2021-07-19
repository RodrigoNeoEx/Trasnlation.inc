import React from"react";
import { useHistory } from "react-router";
import { TiArrowBack } from "react-icons/ti";
import './styles/btnGoBack.css';

const BtnGoBack = () => {
  const history = useHistory()
  return (
    <button
      onClick={history.goBack}
      className="btnBack"
    >
      <TiArrowBack />
    </button>
  );
};

export default BtnGoBack;
