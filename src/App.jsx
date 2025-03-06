import { useState } from "react";

import "./App.css";
const initialContacts = [
  { id: 0, name: "Aarav", email: "aarav@mail.com" },
  { id: 1, name: "Vivaan", email: "vivaan@mail.com" },
  { id: 2, name: "Aditya", email: "aditya@mail.com" },
  { id: 3, name: "Vihaan", email: "vihaan@mail.com" },
  { id: 4, name: "Arjun", email: "arjun@mail.com" },
  { id: 5, name: "Sai", email: "sai@mail.com" },
  { id: 6, name: "Reyansh", email: "reyansh@mail.com" },
  { id: 7, name: "Ayaan", email: "ayaan@mail.com" },
  { id: 8, name: "Krishna", email: "krishna@mail.com" },
  { id: 9, name: "Ishaan", email: "ishaan@mail.com" },
];
function EmailSys({name,email}) {
  const [clicked, setClicked] = useState(false);
  
  return (
    <div className="email-sys">
      <h1>{name}</h1>
      {clicked ? (
        <h2>{email}</h2>
      ) : (
        <button onClick={() => setClicked((clicked) => !clicked)}>
          show email
        </button>
      )}
    </div>
  );
}
function App() {
  const [contacts,setContacts]=useState(initialContacts);
  const list=contacts.map((contact)=><EmailSys key={contact.id} name={contact.name} email={contact.email}/>)
  return (
    <>
      <label>
        <input type="checkbox" onChange={() =>setContacts([...contacts].reverse())} /> Show in reverse order{" "}
      </label>
      <div className="container">
        {list}
      </div>
    </>
  );
}

export default App;
