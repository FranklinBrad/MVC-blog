const handleNewComment = async(e) => {
    e.preventDefault()
    const comment_body = document.getElementById('comment').value
    const post_id = document.querySelector('#postId').value
    const response = await fetch('/api/comment', {method:'POST', body:JSON.stringify({comment_body, post_id}), headers:{'content-':any}})
}