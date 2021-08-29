// import the array which acts as a data source for the list
function makeList() {
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
        listItem.innerHTML = "<a href=''>Somelink</a>"+" "+reconlist[i];
        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}

makeList();
