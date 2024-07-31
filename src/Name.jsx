import React, { useState } from 'react'

function Name() {
    const[first,setFirst]=useState("");
    const[last,setLast]=useState(""); 
    const[fullName,SetFullName]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        SetFullName(`${first} ${last}`);
    }
    
  return (
    <div>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  )
}

export default Name