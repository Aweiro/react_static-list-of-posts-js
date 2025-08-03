import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ post, comments }) => {
  const filterComments = comments.filter(comment => comment.postId === post.id);

  if (filterComments.length === 0) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return (
    <div className="CommentList">
      {filterComments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
