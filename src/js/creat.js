document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const postTitle = document.getElementById('post-title').value;
    const postImage = document.getElementById('post-image').value;
    const postTag = document.getElementById('post-tag').value;
    const postDescription = document.getElementById('post-description').value;

    console.log('Post Created');
    console.log('Title:', postTitle);
    console.log('Image URL:', postImage);
    console.log('Tag:', postTag);
    console.log('Description:', postDescription);
    
});