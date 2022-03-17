export default {
    auth: {
        login: {
            notFoundUser: {
                sp: "El usuario especifico no existe.",
                en: "Could not find your account."
            },
            invalidCredentials: {
                sp: "Las credenciales ingresadas son incorrectas.",
                en: "The credentials entered are incorrect."
            },
            welcome: {
                sp: "Bienvenido a Proplat.",
                en: "Welcome to Proplat."
            },
            missingCredentials:{
                sp: "Las credenciales estan incompletas, o faltantes.",
                en: "Credentials are incomplete, or missing."
            }
        },
        signin:{
            emailAlreadyExists:{
                sp:"Este correo electronico ya esta registrado.",
                en:"This email address is already taken."
            }
        },
        MatchPasswords: {
            dontMatch: {
                sp: "Las contraseñas no coinciden.",
                en: "Passwords do not match."
            }
        },
        signup: {
            userExist: {
                sp: "El correo electrónico de usuario está en uso. Por favor prueba con otro.",
                en: "That user email is already taken. Try another."
            },
            success: {
                sp: "Usuario registrado con éxito.",
                en: "User registered successfully."
            },
            typeNotExist: {
                sp: "Este tipo de usuario no existe",
                en: "This type of user does not exists"
            },
            platformAccessFalse: {
                sp: "Su cuenta se encuentra temporalmente suspendida.",
                en: "Your account is temporarily suspended."
            },
            platformAccessMinutes: {
                sp: "Su cuenta se encuentra temporalmente suspendida por",
                en: "Your account is temporarily suspended for"
            },
            sendPassword: {
                sp: "Su contraseña temporal es: ",
                en: "Your temporary password is: "
            },
            welcomeMessage: {
                sp: "¡Bienvenido a Proplat!",
                en: "Welcome to proplat!"
            }
        },
        verify: {
            sp: "Usuario verificado con éxito.",
            en: "Verified user successfully."
        }
    },
}
