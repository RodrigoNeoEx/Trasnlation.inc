import React from"react";
import Header from "../../components/Header/Header";
import RenderSingle from "../../components/RenderPages/RenderSingle";
import { useSelector } from "react-redux";
import CircularIndeterminate from "../../components/Loaging/Loading";

const Single = () => {
  const { status } = useSelector((state) => state.single );

  return (
    <>
      <Header />
      {status === 'loading' ? <CircularIndeterminate /> : <RenderSingle />}
    </>
  )
}

export default Single;
