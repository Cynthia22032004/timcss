document.getElementById("comment-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;
    
    alert(`Thank you, ${name}! Your comment has been submitted.`);
    
    // Clear the form
    document.getElementById("comment-form").reset();
  });
  