import { useState } from "react"
import "./Comment.css" ;
import CommentsForm from "./CommentsForm";

export default function Comments(){
    let [comments, setComments] = useState([{
        username: "@gsx",
        remarks: "greate work!",
        rating: 4,
    }])

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment])
        console.log("added comment");
    }

    return(
        <>    
        <div>
            <h3>All headings</h3>
            {comments.map((comment, idx)=>(
            <div className="comment" key={idx}>
                <span>{comment.remarks}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>rating : {comment.rating}</span>
                <p>{comment.username}</p>
            </div>
            ))}
        </div>
        <CommentsForm addNewComment={addNewComment}/>
        </>
    )
}