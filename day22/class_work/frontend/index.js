// document.addEventListener("DOMContentLoaded", () => {
//     const parent = document.querySelector(".content"); // Selecting the container for posts
//     const apiUrl = "http://localhost:3000/SVU";

//     // Fetch and display blog posts
//     async function getData() {
//         try {
//             let response = await fetch(apiUrl);
//             let data = await response.json();
//             showData(data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     }

//     // Render blog posts
//     function showData(posts) {
//         parent.innerHTML = ""; // Clear previous content
//         posts.forEach((post) => {
//             let postElement = document.createElement("div");
//             postElement.className = "post";

//             let title = document.createElement("h2");
//             title.innerText = post.title;

//             let content = document.createElement("p");
//             content.innerText = post.content;

//             // Buttons for Update & Delete
//             let postFooter = document.createElement("div");
//             postFooter.className = "post-footer";

//             let updateBtn = document.createElement("button");
//             updateBtn.className = "btn";
//             updateBtn.innerText = "Update";
//             updateBtn.style.backgroundColor = "blue";
//             updateBtn.addEventListener("click", () => updateData(post.id));

//             let deleteBtn = document.createElement("button");
//             deleteBtn.className = "btn";
//             deleteBtn.innerText = "Delete";
//             deleteBtn.style.backgroundColor = "red";
//             deleteBtn.addEventListener("click", () => deleteData(post.id));

//             postFooter.append(updateBtn, deleteBtn);
//             postElement.append(title, content, postFooter);
//             parent.append(postElement);
//         });
//     }

//     // Add new blog post
//     async function addData() {
//         let title = prompt("Enter Post Title:");
//         let content = prompt("Enter Post Content:");
//         if (!title || !content) return alert("Title and Content are required!");

//         let newPost = { title, content };

//         try {
//             let response = await fetch(apiUrl, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(newPost),
//             });

//             if (response.ok) {
//                 alert("Post added successfully!");
//                 getData();
//             }
//         } catch (error) {
//             console.error("Error adding post:", error);
//         }
//     }

//     // Update a blog post
//     async function updateData(id) {
//         let newTitle = prompt("Enter new title:");
//         if (!newTitle) return alert("Title cannot be empty!");

//         try {
//             let response = await fetch(`${apiUrl}/${id}`, {
//                 method: "PATCH",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ title: newTitle }),
//             });

//             if (response.ok) {
//                 alert("Post updated successfully!");
//                 getData();
//             }
//         } catch (error) {
//             console.error("Error updating post:", error);
//         }
//     }

//     // Delete a blog post
//     async function deleteData(id) {
//         try {
//             let response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });

//             if (response.ok) {
//                 alert("Post deleted successfully!");
//                 getData();
//             }
//         } catch (error) {
//             console.error("Error deleting post:", error);
//         }
//     }

//     // Load posts on page load
//     getData();

//     // Add a button to add new posts
//     let addBtn = document.createElement("button");
//     addBtn.innerText = "Add Post";
//     addBtn.className = "btn";
//     addBtn.style.display = "block";
//     addBtn.style.margin = "20px auto";
//     addBtn.addEventListener("click", addData);

//     document.body.insertBefore(addBtn, parent);
// });
document.addEventListener("DOMContentLoaded", () => {
    const parent = document.querySelector(".content");
    const apiUrl = "http://localhost:3000/SVU";

    // Fetch and display blog posts
    async function getData() {
        try {
            let response = await fetch(apiUrl);
            let data = await response.json();
            showData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // Render blog posts
    function showData(posts) {
        parent.innerHTML = ""; // Clear previous content
        posts.forEach((post) => {
            let postElement = document.createElement("div");
            postElement.className = "post";

            let title = document.createElement("h2");
            title.innerText = post.title;

            let content = document.createElement("p");
            content.innerText = post.content;

            // Buttons for Update & Delete
            let postFooter = document.createElement("div");
            postFooter.className = "post-footer";

            let updateBtn = document.createElement("button");
            updateBtn.className = "btn";
            updateBtn.innerText = "Update";
            updateBtn.style.backgroundColor = "blue";
            updateBtn.addEventListener("click", () => updateData(post.id));

            let deleteBtn = document.createElement("button");
            deleteBtn.className = "btn";
            deleteBtn.innerText = "Delete";
            deleteBtn.style.backgroundColor = "red";
            deleteBtn.addEventListener("click", () => deleteData(post.id));

            postFooter.append(updateBtn, deleteBtn);
            postElement.append(title, content, postFooter);
            parent.append(postElement);
        });
    }

    // Add new blog post
    async function addData() {
        let title = prompt("Enter Post Title:");
        let content = prompt("Enter Post Content:");
        if (!title || !content) return alert("Title and Content are required!");

        let newPost = { title, content };

        try {
            let response = await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newPost),
            });

            if (response.ok) {
                alert("Post added successfully!");
                getData();
            }
        } catch (error) {
            console.error("Error adding post:", error);
        }
    }

    // Update a blog post
    async function updateData(id) {
        let newTitle = prompt("Enter new title:");
        if (!newTitle) return alert("Title cannot be empty!");

        try {
            let response = await fetch(`${apiUrl}/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: newTitle }),
            });

            if (response.ok) {
                alert("Post updated successfully!");
                getData();
            }
        } catch (error) {
            console.error("Error updating post:", error);
        }
    }

    // Delete a blog post
    async function deleteData(id) {
        try {
            let response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });

            if (response.ok) {
                alert("Post deleted successfully!");
                getData();
            }
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    }

    // Load posts on page load
    getData();

    // Add a button to add new posts
    let addBtn = document.createElement("button");
    addBtn.innerText = "➕ Add New Post";
    addBtn.className = "btn";
    addBtn.style.display = "block";
    addBtn.style.margin = "20px auto";
    addBtn.style.backgroundColor = "#28a745"; // Green color
    addBtn.style.fontSize = "16px";
    addBtn.style.padding = "12px 20px";
    addBtn.style.borderRadius = "8px";
    addBtn.addEventListener("click", addData);

    document.querySelector(".header").appendChild(addBtn);
});
async function getData() {
    try {
        console.log("Fetching data..."); // Log before fetching
        let response = await fetch("http://localhost:3000/SVU");
        let data = await response.json();
        console.log("Received data:", data); // Log received data
        showData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call getData() manually to check if it logs data
getData();

