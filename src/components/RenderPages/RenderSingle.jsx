import React from"react";
import { useSelector } from "react-redux";
import './styles/single/single.css';

const RenderSingle = () => {
  const { list } = useSelector((state) => state.single );

  return (
    <main className="single__container" key={list.id} >
      <title>{list.title}</title>
      <meta name="description" content={list.excerpt}/>
      <img className="single__img" src={list.featured_media.thumbnail} alt="card img"/>
      <h1 className="single__title">{list.headline}</h1>
      <article className="single__article"dangerouslySetInnerHTML={{__html:list.content}}/>
    </main>
  );
};

export default RenderSingle;