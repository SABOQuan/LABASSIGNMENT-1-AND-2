// script.js
function addTodo() {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;

    if (title && author) {
        var entryText = title + ' - ' + author;
        var entryList = document.getElementById('entries');
        var listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(entryText));

        // Add remove button
        var removeButton = document.createElement('button');
        removeButton.appendChild(document.createTextNode('Remove'));
        removeButton.className = 'remove-button';
        removeButton.onclick = function() {
            entryList.removeChild(listItem);
        };
        listItem.appendChild(removeButton);

        entryList.appendChild(listItem);

        // Clear input fields after adding the entry
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
    } else {
        alert('Please enter both title and author.');
    }
}
