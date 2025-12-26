const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("Id");

async function onSearchChange(event) {
    const id = event.target.value; 
    renderPost(id);
}

async function renderPost(id) {
    const posts = await fetch (`https://jsonplaceholder.typicode.com/posts?Id=${id}`);
    const postsData = await posts.json();
    postListEl.innerHTML = postsData.map(post => postHTML(post)).join('');
    
}

function postHTML(post) {
    return `<div class ="post">         
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>
  `
}

renderPost(id);