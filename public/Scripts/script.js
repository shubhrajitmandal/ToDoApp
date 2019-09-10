const delBtns = document.querySelectorAll(".delete");
const editBtns = document.querySelectorAll(".edit");

delBtns.forEach(del => {
  del.addEventListener("click", () => {
    // console.log(del.parentElement.getAttribute("id"));
    const taskID = del.parentElement.getAttribute("id");
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "/" + taskID, true);
    xhttp.onload = function() {
      if (this.status === 200) {
        console.log("Task Deleted!");
      }
    };
    xhttp.send();
    location.reload();
  });
});

editBtns.forEach(edit => {
  edit.addEventListener("click", () => {
    const updatedTask = prompt("Edit Task:");
    const taskID = edit.parentElement.getAttribute("id");
    const body = JSON.stringify({ task: updatedTask });

    if (updatedTask !== "") {
      const xhttp = new XMLHttpRequest();
      xhttp.open("PATCH", "/" + taskID, true);
      xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhttp.onload = function() {
        if (this.staus === 200) {
          console.log("Task Updated!");
        }
      };
      xhttp.send(body);
      location.reload();
    }
  });
});

// XMLHttpRequest BASICS=================================
function deleteTask() {
  // Create XHR Object
  const xhr = new XMLHttpRequest();

  //Open - type, url, async
  // console.log(xhr);
  xhr.open("DELETE", "/" + index, true);

  // readyState ::
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  xhr.onload = function() {
    if (this.status === 200) {
      console.log("Delete Succesful");
    }
  };

  // xhr.onprogress() = function() {
  //   console.log("ReadyState: ", xhr.readyState)
  // }

  xhr.onerror = function() {
    console.log("Request Error...");
  };

  // Sends request;
  xhr.send();
}
