export interface UserModalInterface {
  id: string;
  email: string;
  username: string;
  password: string;
  lock?: string;
  actived_at?: Date | null;
}
