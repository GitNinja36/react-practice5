import { useState } from "react"
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }
    return errors;
  };

export default function CommentsForm({addNewComment}){
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    // });
    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5,
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    // function handelInputChnage(event){
    //     setFormData((currData)=>{
    //         return{...currData, [event.target.name] : event.target.value};
    //     })
    // }

    // function handelSubmit(event){
    //     event.preventDefault();
    //     addNewComment(formData);

    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 5        
    //     })
    // }

    return(
        <div>
            <h2>give a comment</h2>
            <form onSubmit={formik.handleSubmit}>
               <label htmlFor="username">Username</label>
               <br />
                <input 
                    name="username"
                    id="username" 
                    placeholder="username" 
                    type="text" 
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />
                {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
                ) : null}
                <br /><br/>

                <label htmlFor="remarks">Remarks</label>
                <br />
                <textarea 
                    name="remarks"
                    id="remarks"
                    cols="40" 
                    rows="3" 
                    placeholder="add remarks" 
                    value={formik.values.remarks}
                    onChange={formik.handleChange}
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
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                />
                <br />
                <button type="submit">Add commit</button>
            </form>
        </div>
    )
}