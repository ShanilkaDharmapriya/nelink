import { useParams,useLoaderData } from "react-router-dom";
import axios from "axios";
import CommentList from "../comments";
import articles from "../article-content";
import { useState } from "react";

export default function ArticlePage() {
    const {name}=useParams();
    const {upvotes:initialUpvotes,comments}=useLoaderData();
    const [upvotes,setUpvotes]=useState(initialUpvotes);

    const article = articles.find(a=> a.name===name);

    async function onUpvoteClicked(){
        const response=await axios.post('/api/articles/'+name+'/upvotes');
        const updatedArticleData=response.data;
        setUpvotes(updatedArticleData.upvotes)
    }
    return(
        <>
        <h1>{article.title}</h1>
        <button onClick={onUpvoteClicked}>Upvotes</button>
        <p>This article has {upvotes} Upvotes </p>
        {article.content.map(p=><p key={p}>{p}</p>)}
        <CommentList comments={comments}/>
        </>
    );
}

export async function loader({params}){
    const response=await axios.get('/api/articles/'+params.name);
    const {upvotes,comments} = response.data;
    return {upvotes,comments};
  }