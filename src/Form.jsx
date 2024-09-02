import { useState } from "react"

export default function Form(){
    let[formData, setFormData] = useState({
        fullName: "",
        username: "",
        password:"",
    });

    function handelInputChange(event){

        setFormData((currData)=>{ 
            return {...currData, [event.target.name] : event.target.value};
        })
    };

    function handelSubmit(event){
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        })
    }
     
    return(
        <form onSubmit={handelSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <br />
            <input 
                type="text" 
                placeholder="enter your name" 
                value={formData.fullName} 
                onChange={handelInputChange}
                id="fullname"
                name="fullName"
            />
            <br /><br />
            <label htmlFor="username">Username</label>
            <br />
            <input 
                type="text" 
                placeholder="enter your name" 
                value={formData.username} 
                onChange={handelInputChange}
                id="username"
                name="username"
            />
            <br /><br />
            <label htmlFor="password">Password</label>
            <br />
            <input 
                type="password" 
                placeholder="enter your password" 
                value={formData.password} 
                onChange={handelInputChange}
                id="password"
                name="password"
            />
            <br /><br />
            <button>submit</button>
        </form>
    )
}