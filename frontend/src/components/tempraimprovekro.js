import React, { useState , useEffect ,useRef } from 'react'
const host = "http://localhost:5000";

const UserProfile = () => {
    
    //Change paasword
    const [pass, setPass] = useState({password : ""})
    const editPass = async (password) => {
    // API
    const response = await fetch(`${host}/api/auth/updatePassword`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({password}), // body data type must match "Content-Type" header
    });
    
    const json = await response.json() ;
    console.log(json) ;
    };


    const refClose = useRef(null) ;
    const handleClick = (e) => {
        editPass(pass.password)
        refClose.current.click();
        // props.showAlert("Updated Successfully" , "success") ;
    }
    
    const onChange = (e) => {
        // jo bhi name ki value hai har field me usko change(continuosly update) krke jo bhi type kr rahe hain vo value daal di jayegi
        setPass({...pass,[e.target.name]: e.target.value })
        console.log(pass);
    }
    
    

    
    const initUser =[]
    const [user, setUser] = useState(initUser);
    useEffect(() => {
        if(localStorage.getItem('token')) {
            getUser() 
        }
    }, [])
        // api to show user name and data
    const getUser = async () => {
        // API
    const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    
    const json = await response.json();
    console.log(json);
    setUser(json);
    };

  return (
    <div>
        <div class="container mt-3">
    
        <div class="d-flex flex-row justify-content-center mb-3">
            <div class="image"> <img src="https://i.imgur.com/hczKIze.jpg" class="rounded-circle"/> <span><i class='bx bxs-camera-plus'></i></span> </div>

        </div>
        <h4>Edit Profile</h4>
        <div class="row">
            <div class="col-md-6">
                <div class="inputs"> <label>Name</label> <p class="form-control" type="text" placeholder="Name">{user.name}</p> </div>
            </div>
            <div class="col-md-6">
                <div class="inputs"> <label>Email</label> <p class="form-control" type="text" placeholder="Email">{user.email}</p> </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="about-inputs"> <label>About</label> <textarea class="form-control" type="text" placeholder="Tell us about yourself"> </textarea> </div>
            </div>
        </div>
        <div class="mt-3 gap-2 d-flex justify-content-end"> <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"class="px-3 btn btn-sm btn-outline-primary">Change Password</button></div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Change Password</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Enter your new Passowrd</label>
                  <input type="text" className="form-control" id="pass" name="password" aria-describedby="emailHelp" value={pass.password} minLength={3} onChange={onChange}
                  />
                </div>
            </form>
            </div>
            <div class="modal-footer">
                <button ref={refClose} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={handleClick} type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</div>
    
  )
}

export default UserProfile