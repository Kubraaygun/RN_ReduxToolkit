import * as Yup from 'yup'
const newUserschema=Yup.object().shape(
name:Yup.string().required("Zorunlu Alan")
)