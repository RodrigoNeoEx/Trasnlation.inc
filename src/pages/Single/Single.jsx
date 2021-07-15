import React from"react";
import Header from "../../components/Header/Header";
import RenderSingles from "../../components/RenderPages/RenderSingles";
import { useSelector } from "react-redux";

const Single = () => {
  const { status } = useSelector((state) => state.single );

  return (
    <>
      <Header />
      {status === 'loading' ? <p>Loading...</p> : <RenderSingles />}
    </>
  )
}

export default Single;
