import { useState } from "react"

export default function CommentsForm({addNewComment}){
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
    });

    function handelInputChnage(event){
        setFormData((currData)=>{
            return{...currData, [event.target.name] : event.target.value};
        })
    }

    function handelSubmit(event){
        event.preventDefault();
        addNewComment(formData);

        setFormData({
            username: "",
            remarks: "",
            rating: 5        
        })
    }
    return(
        <div>
            <h2>give a comment</h2>
            <form onSubmit={handelSubmit}>
               <label htmlFor="username">Username</label>
               <br />
                <input 
                    name="username"
                    id="username" 
                    placeholder="username" 
                    type="text" 
                    value={formData.username}
                    onChange={handelInputChnage}
                />
                <br /><br/>

                <label htmlFor="remarks">Remarks</label>
                <br />
                <textarea 
                    name="remarks"
                    id="remarks"
                    cols="40" 
                    rows="3" 
                    placeholder="add remarks" 
                    value={formData.remarks}
                    onChange={handelInputChnage}
                >remarks</textarea>
                <br /><br />

                <label htmlFor="rating">rating</label>
                <input 
                    name="rating"
                    id="rating" 
                    placeholder="rating" 
                    type="number" 
                    min={1} 
                    max={5} 
                    value={formData.rating} 
                    onChange={handelInputChnage}
                />
                <br />
                <button type="submit">Add commit</button>
            </form>
        </div>
    )
}