import React from"react";
import { useSelector } from "react-redux";

const RenderSingle = () => {
  const { list } = useSelector((state) => state.single );

  return (
    <main key={list.id}>
      <title>{list.title}</title>
      <meta name="description" content={list.excerpt}/>
      <img src={list.featured_media.thumbnail} alt="card img"/>
      <h1>{list.headline}</h1>
      <hr/>
      <article dangerouslySetInnerHTML={{__html:list.content}}/>
    </main>
  );
};

export default RenderSingle;