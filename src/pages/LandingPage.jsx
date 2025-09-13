import { useState } from "react";

function LandingPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex-1 ">
      Login Form <br/>
      {username?`welcome ${username}`:""}
      <br />
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2">
          Username
          <br />
          <input
            className="border-black border-1 rounded-3xl"
            name="username"
            onChange={(event) => {
              console.log("event.value", event.target.value);
              setUsername(event.target.value)
            }}
          ></input>
        </div>
        <div className="flex gap-2 ">
          password
          <br />
          <input
            className="border-black border-1 rounded-3xl"
            name="password"
            type="password"
            onChange={(event) => {
              console.log("event.value", event.target.value);
              setPassword(event.target.value)
            }}
          ></input>
        </div>
        <button onClick={()=>{
            if (username=="selva" && password=="prasath"){
                alert("Yay!. Login Success")
            }
            else{
                alert("Failed")
            }
        }}>Login</button>
      </div>
    </div>
  );
}

export default LandingPage;
