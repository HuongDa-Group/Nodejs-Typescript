import { dataAvatar, URL } from '@config/storage';

/**
 * @method linkAvatar
 * @param {String | null} name
 * @returns {string} true & false
 * @description this value is Empty Check
 */
export const linkAvatar = (name: string | null): string => {
  return `${URL}/${dataAvatar}/${name}`;
};
