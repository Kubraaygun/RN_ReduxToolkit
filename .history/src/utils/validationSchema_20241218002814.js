import * as Yup from 'yup';
const newUserSchema = Yup.object().shape({
  name: Yup.string().required('Zorunlu Alan'),
  surname: Yup.string().required('Zorunlu Alan'),
  phoneNumber: Yup.string()
    .required('Zorunlu Alan')
    .max(20, 'Max 20')
    .min(11, 'Min 11'),
  email: Yup.string()
    .email('Geçerli Bir E-Posta Adresi Girin')
    .required('Zorunlu Alan'),
  gender: Yup.string().required('Zorunlu Alan'),
  age: Yup.string().min(18, 'Min 18').max(80, 'Max 80'),
});
export default newUserSchema;
