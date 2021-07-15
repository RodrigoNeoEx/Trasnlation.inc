import React from"react";
import Header from "../../components/Header/Header";
import RenderSingle from "../../components/RenderPages/RenderSingle";
import { useSelector } from "react-redux";

const Single = () => {
  const { status } = useSelector((state) => state.single );

  return (
    <>
      <Header />
      {status === 'loading' ? <p>Loading...</p> : <RenderSingle />}
    </>
  )
}

export default Single;
