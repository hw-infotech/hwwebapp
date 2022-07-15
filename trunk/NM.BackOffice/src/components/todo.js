import React from "react";
import todo from '../components/todoo.css'

const Todo = () => {
  function allowDrop(ev) {
    console.log("dragstart", ev.target.id)
    ev.preventDefault();  // default is not to allow drop
  }
  function dragStart(ev) {
    // The 'text/plain' is referring the Data Type (DOMString) 
    // of the Object being dragged.
    // ev.target.id is the id of the Object being dragged
    console.log("this the i sthe dragstart", ev)
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }
  function dropIt(ev) {
    ev.preventDefault();  // default is not to allow drop
    let sourceId = ev.dataTransfer.getData("text/plain");
    let sourceIdEl = document.getElementById(sourceId);
    let sourceIdParentEl = sourceIdEl.parentElement;
    console.log(sourceIdEl, "this is the dropit ")
    // ev.target.id here is the id of target Object of the drop
    let targetEl = document.getElementById(ev.target.id)
    let targetParentEl = targetEl.parentElement;

    // Compare List names to see if we are going between lists
    // or within the same list
    if (targetParentEl.id !== sourceIdParentEl.id) {
      // If the source and destination have the same 
      // classNameName (card), then we risk dropping a Card in to a Card
      // That may be a cool feature, but not for us!
      if (targetEl.classNameName === sourceIdEl.classNameName) {
        // Append to parent Object (list), not to a 
        // Card in the list
        // This is in case you drag and drop a Card on top 
        // of a Card in a different list
        targetParentEl.appendChild(sourceIdEl);

      } else {
        // Append to the list
        targetEl.appendChild(sourceIdEl);

      }

    } else {
      // Same list. Swap the text of the two cards
      // Just like swapping the values in two variables

      // Temporary holder of the destination Object
      let holder = targetEl;
      // The text of the destination Object. 
      // We are really just moving the text, not the Card
      let holderText = holder.textContent;
      // Replace the destination Objects text with the sources text
      targetEl.textContent = sourceIdEl.textContent;
      // Replace the sources text with the original destinations
      sourceIdEl.textContent = holderText;
      holderText = '';
    }

  }
  return (
    <div classNameName="rop">
      <div className="board-layout">
        <div className="left">
          <div className="board-text">Today Board</div>
        </div>
        <div id='boardlists' className="board-lists">
          <div id='list1' className="board-list" onDropCapture={(event) => dropIt(event)} onDragOver={(event) => allowDrop(event)}>
            <div className="list-title">
              To Do
            </div>
            <div id='card1' className="card" draggable={true} onDragStart={(event) => dragStart(event)}>
              Work on article
            </div>
            <div id='card2' className="card" draggable="true" onDragStart={(event) => dragStart(event)}>
              Back up database
            </div>
            <div id='card3' className="card" draggable="true" onDragStart={(event) => dragStart(event)}>
              Build Lambda function
            </div>
            <div id='card4' className="card" draggable="true" onDragStart={(event) => dragStart(event)}>
              Work on course content
            </div>
            <div id='card5' className="card" draggable="true" onDragStart={(event) => dragStart(event)}>
              Debug SQL code
            </div>
          </div>
          <div id='list2' className="board-list" onDropCapture={(event) => dropIt(event)} onDragOver={(event) => allowDrop(event)}>
            <div className="list-title">
              In Progress
            </div>
          </div>
          <div id='list3' className="board-list" onDropCapture={(event) => dropIt(event)} onDragOver={(event) => allowDrop(event)}>
            <div className="list-title">
              Done
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Todo