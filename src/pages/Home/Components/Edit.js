import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
    
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");


  function noteChange(e) {
    setNote(e.target.value);
  }

  function dateChange(e) {
    setDate(e.target.value);
  }




  function addItem() {
    if(note==""){
      alert("Please input the note!!")
      return
    }else if (date==""){
      alert("Please input the date!!")
      return
    }
    submittingStatus.current = true
    add(function (prevData) {
      return [       
        {
          id: v4(),
          note,
          date,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div>
      <h1>To Do List</h1>
      <p>TASK</p>
      <input type="text" placeholder="What's the task today?" value={note} onChange={noteChange} />
      <p>Date：</p>
      <input type="date"  value={date} onChange={dateChange} />
      <button onClick={addItem} className="add">ADD</button>
    </div>
  );
};

export default Edit;