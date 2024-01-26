    
document.addEventListener('DOMContentLoaded', function() {
    var existingComments = [
        {
            username: "BumpJoyfulMom",
            comment: "Beautifully written article that captures the essence of pregnancy - the mix of wonder and challenge, the transformative journey, and the importance of self-care and support."
        },
        {
            username: "ExpectingJourney",
            comment: "This article offers a poignant depiction of the emotional and physical changes that occur during pregnancy. It admirably focuses on self-care and the strengthening of the partnership, making it an engaging and enlightening read."
        },
        {
            username: "NewLifeCreator",
            comment: "I really love this. The additional paragraph on nurturing the bond between expectant parents adds a unique and heartwarming dimension to this insightful narrative."
        }
    ];

    existingComments.forEach(function(comment) {
        addComment(comment.username, comment.comment);
    });

    updateViewMoreButton();
});

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

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
    commentsContainer.insertBefore(commentDisplay, commentsContainer.firstChild);
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
