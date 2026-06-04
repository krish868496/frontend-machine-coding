import React, { useState } from "react";

type Comment = {
  id: number;
  text: string;
  likes: number;
};

type Post = {
  id: number;
  title: string;
  comments: Comment[];
};

const initialPosts: Post[] = [
  {
    id: 1,
    title: "Learning React",
    comments: [
      {
        id: 1,
        text: "Great post",
        likes: 0,
      },
      {
        id: 2,
        text: "Helpful",
        likes: 0,
      },
    ],
  },
  {
    id: 2,
    title: "Learning JavaScript",
    comments: [
      {
        id: 1,
        text: "Helpful",
        likes: 0,
      },
      {
        id: 2,
        text: "Superb",
        likes: 0,
      },
    ],
  },
  {
    id: 3,
    title: "Learning Next.js",
    comments: [
      {
        id: 1,
        text: "Nice post",
        likes: 0,
      },
      {
        id: 2,
        text: "Very nice",
        likes: 0,
      },
    ],
  },
];

const PostWithComments = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const [commentInputs, setCommentInputs] = useState<Record<number, string>>(
    {},
  );

  const handleInputChange = (postId: number, value: string) => {
    setCommentInputs((prev) => ({
      ...prev,
      [postId]: value,
    }));
  };

  const handleAddComment = (postId: number) => {
    const comment = commentInputs[postId]?.trim();

    if (!comment) return;

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: Date.now(),
                  text: comment,
                  likes: 0,
                },
              ],
            }
          : post,
      ),
    );

    setCommentInputs((prev) => ({
      ...prev,
      [postId]: "",
    }));
  };

  const handleDeleteComment = (postId: number, commentId: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.filter((p) => p.id !== commentId),
            }
          : post,
      ),
    );
  };

  const handleLikeComment = (postId: number, commentId: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? { ...comment, likes: comment.likes + 1 }
                  : comment,
              ),
            }
          : post,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
          Posts With Comments
        </h1>

        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md p-6">
              {/* Post Title */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {post.title}
              </h2>

              {/* Comments */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700">
                  Comments ({post.comments.length})
                </h3>

                {post.comments.length > 0 ? (
                  post.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="flex items-center justify-between bg-gray-50 border rounded-lg p-3"
                    >
                      <p className="text-gray-700">
                        {comment.text}{" "}
                        <span
                          onClick={() => handleLikeComment(post.id, comment.id)}
                          className="ml-2 text-sm text-gray-500 cursor-pointer"
                        >
                          👍 {comment.likes}
                        </span>
                      </p>

                      <button
                        onClick={() => handleDeleteComment(post.id, comment.id)}
                        className="text-red-600 hover:text-red-700 font-medium cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No comments yet.</p>
                )}
              </div>

              {/* Add Comment */}
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={commentInputs[post.id] || ""}
                  onChange={(e) => handleInputChange(post.id, e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  onClick={() => handleAddComment(post.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Add Comment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostWithComments;
