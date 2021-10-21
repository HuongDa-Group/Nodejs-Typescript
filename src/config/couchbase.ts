import {
  Ottoman
} from 'ottoman';

const connectString: string = process.env.DB_COUCHBASE;

const ottoman: Ottoman = new Ottoman();

export default async () => {
  await ottoman.connect(connectString);
}
