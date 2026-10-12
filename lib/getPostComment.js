export default async function getPostComment({ id }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const comments = await res.json();
    return comments;
}
