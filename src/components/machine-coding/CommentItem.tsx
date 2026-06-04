import { useState } from "react";
import type { Comment } from "../../types/post";

type Props = {
  comment: Comment;
  onLike: (commentId: number) => void;
  onReply: (commentId: number, text: string) => void;
  onDelete: ( commentId: number) => void;
};

const CommentItem = ({ comment, onLike, onReply, onDelete }: Props) => {
  const [showReplyBox, setShowReplyBox] = useState(false);

  const [replyText, setReplyText] = useState("");

  return (
    <div className="ml-6 border-l pl-4 mt-3">
      <div className="bg-gray-50 rounded-lg p-3">
        <p>{comment.text}</p>

        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={() => onLike(comment.id)}
            className="text-blue-500 text-sm cursor-pointer"
          >
            👍 {comment.likes}
          </button>

          <button
            onClick={() => setShowReplyBox(!showReplyBox)}
            className="text-green-600 text-sm cursor-pointer"
          >
            Reply
          </button>
          <button
            onClick={() => onDelete(comment.id)}
            className="text-red-600 text-sm cursor-pointer"
          >
            Delete
          </button>
        </div>

        {showReplyBox && (
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write a reply..."
              className="flex-1 border rounded px-3 py-2"
            />

            <button
              onClick={() => {
                const text = replyText.trim();

                if (!text) return;

                onReply(comment.id, text);

                setReplyText("");
                setShowReplyBox(false);
              }}
              className="bg-green-500 text-white px-3 py-2 rounded"
            >
              Add Reply
            </button>
          </div>
        )}
      </div>

      {comment.replies.map((reply) => (
        <CommentItem
          key={reply.id}
          comment={reply}
          onLike={onLike}
          onReply={onReply}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CommentItem;
