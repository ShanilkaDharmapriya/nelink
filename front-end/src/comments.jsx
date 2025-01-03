export default function CommentList({comments}){
    return(
        <>
        <h3>Comments:</h3>
        {comments.map(comment=>(
            <div key={comment.text}>
                <h4>{comment.postedby}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
        
        </>



    )
}