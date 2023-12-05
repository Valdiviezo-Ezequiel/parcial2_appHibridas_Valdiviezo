import yup from 'yup'

const AccountSchema = yup.object({
  email: yup.string().email().min(4).required(),
  password: yup.string().min(4).required(),
  rol: yup.string().min(2).required()
});
const AccountSchema2 = yup.object({
  email: yup.string().email().min(4).required(),
  password: yup.string().min(4).required(),
});

export {
  AccountSchema,
  AccountSchema2
}

// export default {
//   AccountSchema,
//   AccountSchema2
// }