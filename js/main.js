
function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'reconlist.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}
// import the array which acts as a data source for the list
function makeList() {
    loadJSON(function(response) {
      // Parse JSON string into object
        var reconlist = JSON.parse(response);
     });
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = reconlist.length;

    listContainer = document.getElementById('reconlist');
    // Make the list
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
  
    for (var i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        const listItem = document.createElement('li');
        // Add the item text
        listItem.innerHTML = "<a href='"+reconlist[i]['link']+"'>"+reconlist[i]['title']+"</a>";
        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}
