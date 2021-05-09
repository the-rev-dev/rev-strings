export const regex = {
    white_space: /\s/g,
    letters: /[A-Za-z]+$/,
    letters_upper: /[A-Z]+/,
    letters_lower: /[a-z]+/,
    mongo_id: /^[0-9a-fA-F]{24}$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    person_name: /^[A-Za-z]+([ '’‘-][A-Za-z]+)*$/,
    number: /[0-9]+/,
};