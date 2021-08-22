
import { useState, useEffect } from "react"
// import { Button } from "./components/Button"
// import { Input } from "./components/Input"





function App() {



  // const createMessage = (message, user) => ({
  //   message,
  //   user
  // });

  const madeMessage = (message, user = "Vlad") => ({
    message,
    user
  });

  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value)
  }

  const [message, messageList] = useState([]);


  const addMessage = (...items1) => {
    messageList((message) => {
      return [
        ...message,
        ...items1,
      ]
    })

  }



  return (


    <div className="App">


      {/* <Input props={(event) => { console.dir(event.target.value) }} /> */}

      <input type="text" value={value} onChange={onChange} />

      {/* <Button text="SendMessage" func={() => {
        addMessage(madeMessage('user', 'sdsd'));

      }} /> */}


      <button onClick={() => {
        addMessage(madeMessage(value));

      }} >SendMessage</button>



      <ul>

        {
          message.map(({ message, user }) => <li>
            <h3>
              message: {message}
            </h3>
            <p>
              user: {user}
            </p>
          </li>)
        }
      </ul>





      {/* <button
        onClick={() => {
          addMessage(createMessage('user', Date.now()));
        }}>
        append1
      </button> */}


    </div>




  )

}
export default App
