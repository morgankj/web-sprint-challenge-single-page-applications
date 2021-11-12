import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("You must include a name for the order")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .required("You must select a size for your pizza")
        .oneOf(['small', 'medium', 'large'], "Pizza size is required"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushrooms: yup.boolean(),
    peppers: yup.boolean(),
    olives: yup.boolean(),
    special: yup
        .string()
        .trim()
});

export default formSchema;