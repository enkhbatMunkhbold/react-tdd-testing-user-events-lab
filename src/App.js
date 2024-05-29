import React, { useState } from "react";

function App() {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ interests, setInterests ] = useState({
    interest1: false,
    interest2: false,
    interest3: false
  })

  function updateInterests(e) {
    const { id, checked } = e.target
    setInterests({...interests, [id]: checked})
  }

  function updateName(e) {
    setName(e.target.value)
  }

  function updateEmail(e) {
    setEmail(e.target.value)
  }

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <h1>Newsletter Sign Up</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <input 
          type="text" 
          id="name"
          value={name} 
          onChange={updateName}
        />
        <br/>
        <label htmlFor="email">Email: </label>
        <input 
          type="text" 
          id="email"
          value={email} 
          onChange={updateEmail}
        />
        <br/><br/>
        <h2>Select areas of interests</h2>
        <input type="checkbox" id="interest1" checked={interests.interest1} onChange={updateInterests}/>
        <label htmlFor="interest1">World News</label>
        <input type="checkbox" id="interest2" checked={interests.interest2} onChange={updateInterests}/>
        <label htmlFor="interest2">Sport News</label>
        <input type="checkbox" id="interest3" checked={interests.interest3} onChange={updateInterests}/>
        <label htmlFor="interest3">Local News</label>
      </form>
    </main>
  );
}

export default App;
