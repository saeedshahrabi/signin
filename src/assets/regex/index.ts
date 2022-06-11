export const Regex ={
    email:/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
    // pattern for password. The pattern is using number, symbol, Capital and small letter and length should be more than 7
    password:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
}