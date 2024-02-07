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

export type UserDetailsRequestInput = {
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