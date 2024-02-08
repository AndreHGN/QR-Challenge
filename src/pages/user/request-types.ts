export type User = {
  id: string;
  name: string;
  email: string;
  photo_url: string;
  admission_date: string;
  job_title: string;
  created_at: string;
  updated_at: string;
};

export type UserDetailsResponse = {
  user: User;
};

export type AddUserInput = {
  user: {
    name: string;
    email: string;
    photo_url?: string;
    admission_date: string;
    job_title: string;
  };
};

export type Users = User[];

export type UserListResponse = {
  users: Users;
};

export type UpdateUserDetailsInput = {
  user: {
    name?: string;
    email?: string;
    photo_url?: string;
    admission_date?: string;
    job_title?: string;
  };
};
export type UpdateUserDetailsResponse = {
  user: Omit<User, 'id'>;
};

export type Comment = {
  id: string;
  value: string;
  created_at: string;
  updated_at: string;
  user: User;
};

export type CreateCommentInput = {
  comment: {
    user_id: number;
    value: string;
  };
};

export type CreateCommentOutput = {
  comment: Comment;
};

export type CommentsResponse = {
  comments: Comment[];
};
