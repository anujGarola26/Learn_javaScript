// Problem 1: Dynamic Task List Appender with Isolated Item Deletion


function appendTaskItemRaw(listElement, taskText) {

  if (!listElement || !taskText) return null;
  
  var cleanText = taskText.replace(/^\s+|\s+$/g, '');
  
  if (cleanText.length === 0) return null;
  
  var li = document.createElement('li');
  
  li.setAttribute('class', 'task-item');
  
  var span = document.createElement('span');
  
  span.appendChild(document.createTextNode(cleanText));
  
  var btn = document.createElement('button');
  
  btn.appendChild(document.createTextNode('Delete'));
  
  btn.onclick = function() {
  
  if (li.parentNode) {
  
  li.parentNode.removeChild(li);
  
  }
  
  };
  
  li.appendChild(span);
  
  li.appendChild(btn);
  
  listElement.appendChild(li);
  
  return li;
  
  }
  