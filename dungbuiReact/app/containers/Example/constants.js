/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CALL_FOLK = 'boilerplate/blog/CALL_FOLK';
export const ERROR_EX = 'boilerplate/blog/ERROR_EX';
export const FOLK_1 = 'boilerplate/blog/FOLK_1';
export const FOLK_2 = 'boilerplate/blog/FOLK_2';
