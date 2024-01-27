document.addEventListener('DOMContentLoaded', function() {
    updateViewMoreButton();
});

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var username = document.getElementById('username').value.trim();
    var comment = document.getElementById('comment').value.trim();

    if (username === '' || comment === '') {
        alert('Please fill in all fields.');
        return;
    }

    addComment(username, comment);
    document.getElementById('commentForm').reset();
    updateViewMoreButton();
});

function addComment(username, comment) {
    var commentDisplay = document.createElement('div');
    commentDisplay.classList.add('comment');
    commentDisplay.innerHTML = `
        <div class="comment-content">
            <div class="comment-username"><strong>${username}</strong></div>
            <div class="comment-text">${comment}</div>
        </div>`;

    var commentsContainer = document.getElementById('commentsDisplay');
    commentsContainer.appendChild(commentDisplay); // Append the new comment
}

function updateViewMoreButton() {
    var comments = document.querySelectorAll('.comment');
    var viewMoreButton = document.getElementById('viewMore');

    if (comments.length > 3) {
        viewMoreButton.style.display = 'block';

        for (var i = 3; i < comments.length; i++) {
            comments[i].style.display = 'none';
        }

        viewMoreButton.onclick = function() {
            for (var i = 3; i < comments.length; i++) {
                comments[i].style.display = 'block';
            }
            viewMoreButton.style.display = 'none';
        };
    } else {
        viewMoreButton.style.display = 'none';
    }
}
