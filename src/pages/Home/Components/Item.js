const Item = ({ id, note, date,  deleteData, submittingStatus }) => {

    function deleteItem() {
      submittingStatus.current = true
      deleteData(function(prev) {
        return prev.filter(item => item.id !== id)
      })
    }
  
    return (
      <div className="item">
        <div>
          <p>{note}</p>
          <p>Date: {date}</p>
        </div>
        <button onClick={deleteItem} className="remove">REMOVE</button>

      </div>
    );
  };
  
  export default Item;