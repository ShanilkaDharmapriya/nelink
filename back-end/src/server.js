import express from 'express';

const articleinfo = [
    {articleName:'learn-react',upvotes:0},
    {articleName:'Mongoth',upvotes:0}
]

const app = express();

app.use(express.json());

app.post('/api/articles/:name/upvotes',(req,res)=>{
    const article=articleinfo.find(a=> a.articleName === req.params.name);
    article.upvotes += 1;
    res.send({upvotes: article.upvotes})
})

app.listen(8000 , function(){
    console.log('Server is listening on port 8000')
});