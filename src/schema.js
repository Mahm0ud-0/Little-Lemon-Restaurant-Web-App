import * as yup from "yup"

const expRegEx = /^(0[1-9]|1[0-2])\/\d{2}$/

const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
// Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character

export const validationSchema = yup.object({
    date: yup.date("Invalid date").required("required"),

    guests: yup
        .number()
        .positive("Invalid number")
        .required("required"),

    name: yup.string().required("required"),

    email: yup
        .string()
        .email("Invalid email")
        .required("required"),

    creditCard: yup
        .string()
        .matches(/^[0-9]{16}$/, "Invalid card number")
        .required("required"),

    expDate: yup
        .string()
        .required("required")
        .test("valid-month", "Invalid month", function (value) {
            if (!value) {
                return false
            }

            const [month] = value.split("/").map((item) => parseInt(item, 10))

            return month >= 1 && month <= 12
        })
        .test(
            "is-future-date",
            "Expiry date must be in the future",
            function (value) {
                if (!value) {
                    return false
                }

                const currentDate = new Date()
                const [month, year] = value
                    .split("/")
                    .map((item) => parseInt(item, 10))

                // Adding 1 to the month because JavaScript months are zero-indexed
                const expiryDate = new Date(year + 2000, month, 1)

                return expiryDate > currentDate
            }
        ),

    cvv: yup
        .string()
        .matches(/^[0-9]{3,4}$/, "Invalid CVV")
        .required("CVV is required"),
})

export const OrderValidationSchema = yup.object({
    email: yup
        .string()
        .email("Invalid email")
        .required("required"),

    creditCard: yup
        .string()
        .matches(/^[0-9]{16}$/, "Invalid card number")
        .required("required"),

    expDate: yup
        .string()
        .required("required")
        .test("valid-month", "Invalid month", function (value) {
            if (!value) {
                return false
            }

            const [month] = value.split("/").map((item) => parseInt(item, 10))

            return month >= 1 && month <= 12
        })
        .test(
            "is-future-date",
            "Expiry date must be in the future",
            function (value) {
                if (!value) {
                    return false
                }

                const currentDate = new Date()
                const [month, year] = value
                    .split("/")
                    .map((item) => parseInt(item, 10))

                // Adding 1 to the month because JavaScript months are zero-indexed
                const expiryDate = new Date(year + 2000, month, 1)

                return expiryDate > currentDate
            }
        ),

    cvv: yup
        .string()
        .matches(/^[0-9]{3,4}$/, "Invalid CVV")
        .required("CVV is required"),
})

export const LoginValidationSchema = yup.object({
    email: yup
        .string()
        .email("Invalid email")
        .required("required"),

    password: yup
        .string()
        .matches(passwordRegEx, { message: "Invalid Password" })
        .required("required"),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "password must match")
        .required("Required"),
})
