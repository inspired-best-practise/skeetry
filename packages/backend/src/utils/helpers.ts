export const generateSmsCode = () => {
  return Math.floor(1000 + Math.random() * 9000);
};
