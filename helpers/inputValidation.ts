
const emailValidation = ({email}:{email:string})=>{
    const regexEmail = /^[a-zA-Z0-9. !#&%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}
const nameValidation  = ({name}:{name:string})=>{
    const regexPhone = /^[a-zA-Z]{2,}.*/g;
    return regexPhone.test(name)
}

export {emailValidation,nameValidation}