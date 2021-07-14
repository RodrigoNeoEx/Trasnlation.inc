import React from"react";
import Header from "../../components/Header/Header";
import BtnGoBack from "../../components/Buttons/BtnGoBack";
import { useSelector } from "react-redux";

const Single = () => {
  const {  list  } = useSelector((state) => state.single );
  const { status } = useSelector((state) => state.single );

  const renderResults = () => {
    return (
      <main key={list.id}>
        <title>{list.title}</title>
        <meta name="description" content={list.excerpt}/>
        <img src={list.featured_media.thumbnail} alt="card img"/>
        <h1>{list.headline}</h1>
        <hr />
        <article dangerouslySetInnerHTML={{__html:list.content}}/>
      </main>
    );
  };

  return (
    <>
      <Header />
      <BtnGoBack />
      {status === 'loading' ? <p>Loading...</p> : renderResults()}
    </>
  )
}

export default Single;
