export type Comment = {
  id: number;
  text: string;
  likes: number;
  replies: Comment[];
};

export type Post = {
  id: number;
  title: string;
  comments: Comment[];
};
