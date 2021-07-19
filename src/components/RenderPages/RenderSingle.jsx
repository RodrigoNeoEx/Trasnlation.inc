import React from"react";
import { useSelector } from "react-redux";
import './styles/single/single.css';
import TabsInfo from "../TabsInfo/TabsInfo";

const RenderSingle = () => {
  const { list } = useSelector((state) => state.single );

  return (
    <main className="single__container" key={list.id} >
      <title>{list.title}</title>
      <meta name="description" content={list.excerpt}/>
      <TabsInfo />
      <img className="single__img" src={list.featured_media.thumbnail} alt="card img"/>
      <div className="single__author">
        <p>Author: {list.author.name}</p>
        <p>Published date: {list.published}</p>
      </div>
      <h1 className="single__title">{list.headline}</h1>
      <article className="single__article"dangerouslySetInnerHTML={{__html:list.content}}/>
      <h3 className="single__bibliography">Bibliography</h3>
      <p className="single__article"dangerouslySetInnerHTML={{__html:list.bibliography}}/>
    </main>
  );
};

export default RenderSingle;
