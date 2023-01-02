import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório.")
    .min(3, "O nome precisa de pelo menos três caracteres."),
  email: yup.string().required("O e-mail é obrigatório."),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(8, "a senha deve conter no mínimo 8 caracteres.")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra.")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caractere especial."
    ),
  confirmPassword: yup
    .string()
    .required("A confirmação é obrigatória.")
    .oneOf([yup.ref("password")], "As senhas devem ser idênticas."),
});
