function addPost(){
    var title = document.getElementById("title");
    var description = document.getElementById("description")
    console.log(title.value, description.value);

    if (title.value.trim() && description.value.trim()) {
    var posts = document.getElementById("post-container");
    posts.innerHTML += `
    <div class="card mb-3">
                    <div class="card-header">
                        @Post
                    </div>
                    <div class="card-body">
                        <figure>
                            <blockquote class="blockquote mb-0">
                                <p>${title.value}</p>
                            
                            <footer class="blockquote-footer">
                                ${description.value}
                            </footer>
                            </blockquote>
                        </figure>
                    </div>
                </div>`
                title.value = "";
                description.value = "";
    } else{
     Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Enter your title & description!",
  
});
}
}             
