let required = (propertyType) => {
  return v => v && v.length > 0 || `Vous devez entrer un ${propertyType}`
}
let minLength = (propertyType, minLength) => {
  return v => v && v.length >= minLength || `${propertyType} doit faire au moins ${minLength} caracteres`
}
let maxLength = (propertyType, maxLength) => {
  return v => v && v.length <= maxLength || `${propertyType} doit faire plus que ${maxLength} caracteres`
}

let emailFormat = () => {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,24})+$/
  return v => v && regex.test(v) || "Must be a valid email"
}

export default {
  required,
  minLength,
  maxLength,
  emailFormat
}
