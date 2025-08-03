import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post, users, comments }) => {
  const currentUser = users.find(user => user.id === post.userId);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}
          <UserInfo key={currentUser.id} user={currentUser} />;
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {currentUser && (
        <CommentList post={post} users={users} comments={comments} />
      )}
    </div>
  );
};
