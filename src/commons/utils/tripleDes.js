import CryptoJS from 'crypto-js';

const key = 'ThisIsSpartaThisIsSparta';
const base64 = CryptoJS.enc.Utf8.parse(key);

/**
 * need encrypt message in 3DES
 * @param message
 * @returns {CipherParams|PromiseLike<ArrayBuffer>}
 */
export const encryptMessage = (message = '') => CryptoJS.TripleDES.encrypt(message, base64, {
  mode: CryptoJS.mode.ECB
});

/**
 * need decrypt message in 3DES
 * @param cipher
 * @returns {string}
 */
export const decryptMessage = (cipher) => CryptoJS.TripleDES.decrypt(cipher, base64, {
  mode: CryptoJS.mode.ECB
}).toString(CryptoJS.enc.Utf8);
