
export default async function Comments({ commentsPromise }) {
    const comments = await commentsPromise;
    return (
        <div className="mt-4">
            <h3 className="text-xl font-bold">Comments</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id} className="mt-2">
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}