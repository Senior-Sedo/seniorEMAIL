/**
 * Validate an email => true | false.
 * @param {string} email - required
 * @returns {boolean} true | false
 * @throws TypeError if the email is not a string
 * 
 * @example
 * import seniorEMAIL from "@ssts/email";
 * const isEmail: boolean = seniorEMAIL("example@gmail.com");
 * 
 * console.log(isEmail);
 * // Log: true
 */
const seniorEMAIL = (email: string): boolean => {
  if (typeof email !== "string") throw new TypeError("email must be a string");

  return /^[A-Za-z]+([^A-Za-z0-9]?[A-Za-z0-9]+)*@[A-Za-z]+([\.\-]?[A-Za-z0-9]+)*\.[A-Za-z]{2,}$/i.test(email);
};

declare global {
  interface Window {
    ssts: any;
  }
}
if (typeof window !== "undefined") {
  if (typeof window.ssts !== "object") window.ssts = {};
  window.ssts.seniorEMAIL = seniorEMAIL;
};

export default seniorEMAIL;
