// Task 1 - Create an array containing at least 7 strings picked from this list of CSS color values (https://developer.mozilla.org/en-US/docs/Web/CSS/named-color).

console.log("Task 1");

let colourArr = ["black", "red", "teal", "crimson", "darkmagenta", "darkorchid", "linen"];

// Task 2 - Create an unordered list element and store it in a variable.

console.log("Task 2");

let unorderedList = document.createElement("ul");

// Task 3 - Create a new list item element for each item in the array you created (and do some other things).

console.log("Task 3");

for (i = 0; i < colourArr.length; i++) {
    let listItemEl = document.createElement("li");

//  Set the innerText (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText) property of each element to be the string in the array.
    listItemEl.innerText = colourArr[i + 1];

//  Set the color (https://developer.mozilla.org/en-US/docs/Web/CSS/color) CSS property (not a regular property, but part of the style!) of the element to be the string in the array.
    listItemEl.style.color = colourArr[i + 1];

//  Add the element to the end of your unordered list.
    unorderedList.appendChild(listItemEl);
}

// Task 4 - Add the whole list to the end of the body of your webpage.

    console.log("Task 4");

    document.body.appendChild(unorderedList);
