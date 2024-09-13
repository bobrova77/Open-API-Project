console.log("JavaScript is linked correctly!");

// Fetching GitHub repositories
fetch("https://api.github.com/users/bobrova77/repos")
  .then((response) => response.json()) // Convert the response to JSON
  .then((repositories) => {
    console.log(repositories); // Log the JSON response to see the data
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error); // Log any errors
  });
