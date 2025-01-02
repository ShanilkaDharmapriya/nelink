import express from 'express';

const articleinfo = [
    {articleName:'learn-react',upvotes:0,comments:[]},
    {articleName:'Mongoth',upvotes:0,comments:[]}
]

const app = express();

app.use(express.json());

app.post('/api/articles/:name/upvotes',(req,res)=>{
    const article=articleinfo.find(a=> a.articleName === req.params.name);
    article.upvotes += 1;
    res.json(article)
})

app.post('/api/articles/:name/comments',(req,res)=>{
    const {name} = req.params;
    const {postedby,text}= req.body;

    const article=articleinfo.find(a=>a.articleName===name);

    article.comments.push({
        postedby,
        text
    })
    res.json(article);

})

app.listen(8000 , function(){
    console.log('Server is listening on port 8000')
});