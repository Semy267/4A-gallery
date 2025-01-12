const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function validateEmail(email: string) {
  return emailRegex.test(email);
}

export const regexNumbersOnly = {
  regex: /^[0-9]+$/,
  msg: "Only Numbers",
};
export const phoneNumberRegex = {
  regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, // allow +
  msg: {
    min: "Min 10 Numbers",
    max: "Max 13 Numbers",
  },
};

export const usernameRegex = {
  regex: /^[a-z0-9\_\.]+$/,
  msg: "Only Numbers and Letters",
};

export const nameRegex = {
  regex: /^[a-zA-Z\s]+$/,
  msg: {
    min: "Min 5 Characters",
    max: "Max 50 Characters",
  },
};
