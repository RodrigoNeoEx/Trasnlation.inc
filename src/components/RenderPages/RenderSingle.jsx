import React from"react";
import { useSelector } from "react-redux";
import './styles/single/single.css';

const RenderSingle = () => {
  const { list } = useSelector((state) => state.single );

  return (
    <main className="single__container" key={list.id} >
      <title>{list.title}</title>
      <meta name="description" content={list.excerpt}/>
      <p>{list.categories[0].name}</p>
      <p>{list.categories[0].description}</p>
      <p>{list.tags[0].name}</p>
      <p>{list.tags[1].name}</p>
      <p>Author: {list.author.name}</p>
      <p>Published date: {list.published}</p>
      <img className="single__img" src={list.featured_media.thumbnail} alt="card img"/>
      <h1 className="single__title">{list.headline}</h1>
      <article className="single__article"dangerouslySetInnerHTML={{__html:list.content}}/>
      <p>Bibliography</p>
      <p className="single__article"dangerouslySetInnerHTML={{__html:list.bibliography}}/>
    </main>
  );
};

export default RenderSingle;