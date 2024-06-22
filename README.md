# Wikipedia-Search-Application-
Developed a custom Wikipedia search application with a user friendly interface and asynchronous fetch GET HTTP API calls, allowing users to access and explore information easily.

Overview
This project is a custom Wikipedia search application that allows users to search for information on Wikipedia through a user-friendly interface. The application makes asynchronous HTTP GET requests to fetch search results, providing a seamless and responsive user experience.

The Wikipedia Search Application is built using HTML, CSS, and JavaScript to create a responsive and user-friendly interface. The main HTML file sets up the structure of the application, including the search input field and the container for displaying search results. The CSS file, linked from the HTML, styles the components, ensuring the application is visually appealing and accessible. It uses Google Fonts for better typography and Bootstrap for responsive design. The HTML also includes a spinner element that shows a loading animation while search results are being fetched.

The JavaScript file powers the application's functionality. It listens for the "Enter" key press on the search input field and triggers the searchWikipedia function. This function clears previous results, displays the spinner, and sends an asynchronous HTTP GET request to the Wikipedia search API with the user's query. When the API responds with search results, the displayResults function is called. This function hides the spinner and iterates over the results, creating and appending HTML elements to display each result's title, link, and description dynamically. This asynchronous handling ensures a smooth and responsive user experience.

Features
User-Friendly Interface: Simplified and intuitive design for easy navigation and search.
Asynchronous Fetch: Utilizes asynchronous HTTP GET requests for fast and efficient data retrieval.
Instant Search Results: Provides instant search results as users type their queries.
Detailed Information: Allows users to explore detailed information on their search topics.
Installation
Clone the Repository:

Usage
Type a keyword in the search bar and press Enter.
View the search results displayed below the search bar.


