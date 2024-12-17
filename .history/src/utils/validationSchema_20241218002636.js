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
  password: Yup.string()
    .min(8, '��ifre 8 karakterden uzun olmalıdır')
    .required('Zorunlu Alan'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], '��ifreler Eşleşmelidir')
    .required('Zorunlu Alan'),
});
