import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, users, comments }) => {
  return posts.map(post => (
    <div className="PostList">
      <PostInfo post={post} key={post.id} users={users} comments={comments} />
    </div>
  ));
};
