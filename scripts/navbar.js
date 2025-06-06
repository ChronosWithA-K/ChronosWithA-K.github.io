// Define a new custom element 'NavBar' by extending the HTMLElement class
class NavBar extends HTMLElement {
    // Method called when the element is added to the DOM
    connectedCallback() {
        // Set the id attribute of this element to 'navbar'
        this.id = "navbar";

        // Set the inner HTML of this element to contain a navigation bar
        this.innerHTML = `
        <ul>
            <li><a href="/index.html">About Me</a></li>
            <li><a href="/resume-internships.html">Resume/Internships</a></li>
            <li><a href="/sports-extracurriculars.html">Sports/Extracurriculars</a></li>
            <li><a href="/my-writing.html">My Writing</a></li>
            <li><a href="/my-future.html">My Future</a></li>
        </ul>`;
    }
}

// Register the custom element with the tag name <nav-bar>
customElements.define('nav-bar', NavBar);