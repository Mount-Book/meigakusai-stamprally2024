import CryptoJS from "crypto-js";

export const HashingSha1 = (text: string) => {
  const SALT = import.meta.env.VITE_SALT;
  const hash = CryptoJS.SHA1(text + SALT);

  console.log(`${text} / ${hash}`);

  return hash.toString(CryptoJS.enc.Hex);
};
