import GenderEnumInterface from '@interfaces/enum/gender.enum.interface';

export interface UserModalInterface {
  id?: string;
  email: string;
  username: string;
  fullname?: string | null;
  nickname?: string | null;
  birthday?: Date | null;
  password: string;
  money?: number;
  lang?: string;
  country?: string;
  city?: string;
  gender?: GenderEnumInterface;
  lock?: string;
  avatar?: string;
  actived_email_at?: Date | null;
}
