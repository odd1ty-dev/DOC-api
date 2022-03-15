export default {
    JoiValidationError: {
        Login: {
            sPassword: {
                sp: "Por favor, ingrese una contraseña correcta. Debe tener como mínimo 6 caracteres.",
                en: "Please enter a correct password. It must be at least 6 characters long."
            },
            sEmail: {
                sp: "Por favor, ingresa un correo electrónico válido.",
                en: "Please, enter a correct email."
            },
            sDeviceId: {
                sp: "Por favor, ingresa un id de dispositivo correcto.",
                en: "Please, enter a correct device id."
            },
            sDeviceName: {
                sp: "Por favor, ingresa un nombre de dispositivo correcto.",
                en: "Please, enter a correct device name."
            }
        },
        Users: {
            sName: {
                sp: "Por favor, ingresa un nombre correcto.",
                en: "Please, enter a valid name."
            },
            sNameLength: {
                sp: "El nombre no puede tener mas de 40 caracteres.",
                en: "Name cant have 40 characteres."
            },
            sNameRegex: {
                sp: "El nombre no puede tener caracteres especiales.",
                en: "Name cant have special characters."
            },
            sLastname: {
                sp: "Por favor, ingresa un apellido correcto.",
                en: "Please, enter a valid last name."
            },
            sLastNameLength: {
                sp: "El apellido no puede tener mas de 40 caracteres.",
                en: "Last name cant have 40 characteres."
            },
            sLastNameRegex: {
                sp: "El apellido no puede tener caracteres especiales.",
                en: "Last name cant have special characters."
            },
            sEmail: {
                sp: "Por favor, ingresa una dirección de correo válida.",
                en: "Please, enter a valid email."
            },
            sPhoneNumber: {
                sp: "Por favor, ingresa un número de teléfono correcto.",
                en: "Please, enter a valid phone number."
            },
            sPhoneNumberMin: {
                sp: "El número de teléfono no puede tener menos de 10 digitos.",
                en: "Phone number can't have less than 10 digits."
            },
            sPhoneNumberMax: {
                sp: "El número de teléfono no puede tener mas de 13 números.",
                en: "Phone number can't have more than 13 digits."
            },
            sUserId: {
                sp: "Por favor, ingresa un id de usuario correcto.",
                en: "Please, enter a valid user id."
            },
            sLang: {
                sp: "Por favor, ingresa un código lenguage correcto.",
                en: "Please, enter a valid language code."
            },
            sPositionName: {
                sp: "Por favor, ingresa un puesto de trabajo correcto.",
                en: "Please, enter a correct work position."
            },
            sPassword: {
                sp: "Por favor, ingrese una contraseña correcta. Debe tener como mínimo 6 caracteres.",
                en: "Please enter a correct password. It must be at least 6 characters long."
            },
            bPlatformAccess: {
                sp: "Por favor, ingresa un valor verdadero o falso para el estado de usuario.",
                en: "Please, input a true or false value for platform access user status."
            },
            bRead: {
                sp: "Por favor, ingresa un valor verdadero o falso para el estado de una notificación.",
                en: "Please, input a true or false value for notification status."
            },
            sRole: {
                sp: "Por favor, ingresa un nombre de puesto correcto.",
                en: "Please, input a correct position name."
            },
            sCountryCallingCode: {
                sp: "Por favor, ingresa una número de clave de país correcto.",
                en: "Please, input a correct country number key."
            },
            sAreaCallingCode: {
                sp: "Por favor, ingresa una número de clave de área correcto.",
                en: "Please, input a correct area calling code number."
            },
            sPhoneExtension: {
                sp: "Por favor, ingresa un número de extensión para usuario correcto.",
                en: "Please, input a correct phone number."
            },
            aUserPermissions: {
                sp: "Por favor, ingresa un arreglo de id de permisos correcto.",
                en: "Please, input a correct user permissions array."
            }
        },
        Modules: {
            sModuleId: {
                sp: "Por favor, ingresa un id de módulo correcto.",
                en: "Please, input a correct module id."
            }
        },
        Filters: {
            sMimeType: {
                sp: "Por favor, ingresa un valor correcto para el tipo de archivo.",
                en: "Please, enter a correct value for file type."
            },
            sSearch: {
                sp: "Por favor, ingresa un valor correcto para la búsqueda",
                en: "Please, enter a correct value for search"
            },
            iPageNumber: {
                sp: "Por favor, ingresa un valor númerico para la paginación.",
                en: "Please, enter a numeric value for pagination."
            },
            iItemsPerPage: {
                sp: "Por favor, ingresa un valor númerico para los elementos por página.",
                en: "Please, enter a numeric value for items per page."
            },
            iTotal: {
                sp: "Por favor, ingresa un valor númerico para el total de elementos.",
                en: "Please, enter a numeric value for total items."
            },
            aImagesSizes: {
                sp: "Por favor, asegurese de usar un arreglo de tamaño de imagenes correcto.",
                en: "Please, enter a correct array of images sizes"
            },
            iImageLength: {
                sp: "Por favor, ingrese un valor númerico para la longitud del arreglo de imagenes.",
                en: "Please, enter a numeric value for array of images length"
            },
            bCustomer: {
                sp: "Por favor, ingrese un valor booleano.",
                en: "Please, enter a boolean value."
            },
            sVendorEnterpriseId: {
                sp: "Por favor, ingresa un id de empresa proveedora correcta.",
                en: "Please, enter a correct vendor enterprise id."
            },
            bVerified: {
                sp: "Por favor, ingresa un valor booleano para el filtro de status de usuario.",
                en: "Please, input a boolean value for status user filter."
            },
            iFilter: {
                sp: "Por favor, ingresa un valor númerico para usar este filtro.",
                en: "Please, input a numeric value for use this filter."
            },
            sSort: {
                sp: "Por favor ingresa un valor entre 'asc' o 'desc' para ordenar los datos de forma correcta.",
                en: "Please, input a value between 'asc' or 'desc' to sort the data correctly."
            },
            sTransactionType: {
                sp: "Por favor ingresa un valor entre 'in' o 'out' para ordenar los datos de forma correcta.",
                en: "Please, input a value between 'in' or 'out' to sort the data correctly."
            }
        },
        Permissions: {
            aException: {
                sp: "Por favor, ingresa una cadena de texto separada por comas.",
                en: "Please, input a string split by commas."
            },
            sPermissionId: {
                sp: "Por favor, ingresa un id de permisos correcto.",
                en: "Please, input a correct permission id."
            },
            bBoolean: {
                sp: "Por favor, ingresa un valor positivo o negativo (true o false) para asignar permisos por usuario.",
                en: "Please, input a positive or negative value (true or false) for add permissions to user."
            }
        },
        RecoveryPassword: {
            sToken: {
                sp: "Por favor, ingrese un token de recuperación de contraseña válido.",
                en: "Please, enter a valid recovery password token."
            },
            sNewPassword: {
                sp: "Por favor, ingrese una contraseña con mas de 6 y menos de 13 caracteres.",
                en: "Please enter a password with more than 6 and less than 13 characters."
            },
            sConfirmNewPassword: {
                sp: "Por favor, ingrese una contraseña con mas de 6 y menos de 13 caracteres.",
                en: "Please enter a password with more than 6 and less than 13 characters."
            },
            sLang: {
                sp: "Por favor, ingresa un código de lenguage correcto.",
                en: "Please, enter a correct language code."
            },
            sUserType: {
                sp: "Por favor, ingresa un tipo de usuario correcto.",
                en: "Please, enter a correct user type"
            },
            sPrimaryKey: {
                sp: "Por favor, ingresa un identificador correcto para el tipo de usuario.",
                en: "Please, enter a correct id for the user type."
            }
        },
        Locations: {
            sCountryId: {
                sp: "Por favor, ingresa un id de país correcto.",
                en: "Please, enter a correct country id."
            },
            sLang: {
                sp: "Por favor, ingresa un código de lenguage correcto.",
                en: "Please, enter a correct language code."
            },
            sStateId: {
                sp: "Por favor, ingresa un id de estado correcto.",
                en: "Please, enter a correct state id."
            },
            sUserType: {
                sp: "Por favor, ingresa un tipo de usuario válido.",
                en: "Please, input a valid user type.",
            }
        },
        Customers: {
            sCustomerId: {
                sp: "Por favor, ingresa un id de cliente correcto.",
                en: "Please, enter a correct customer id."
            },
            sEnterpriseName: {
                sp: "Por favor, ingresa un nombre de empresa correcto.",
                en: "Please, input a correct enterprise name."
            },
            sEnterpriseEmail: {
                sp: "Por favor, ingresa un correo electrónico de empresa correcto.",
                en: "Please, input a correct enterprise email."
            },
            sManagerFullName: {
                sp: "Por favor, ingresa un nombre de responsable de empresa correcto.",
                en: "Please, input a correct enterprise manager fullname."
            },
            sManagerCountryCallingCode: {
                sp: "Por favor, ingresa una número de clave de país correcto.",
                en: "Please, enter a correct manager country calling code."
            },
            sManagerAreaCallingCode: {
                sp: "Por favor, ingresa una número de clave de área correcto.",
                en: "Please, enter a correct manager area calling code."
            },
            sManagerPhoneNumber: {
                sp: "Por favor, ingresa un número de teléfono para responsable de empresa correcto.",
                en: "Please, input a correct manager phone number."
            },
            sManagerExtensionNumber: {
                sp: "Por favor, ingresa un número de extensión para responsable de empresa correcto.",
                en: "Please, input a correct manager phone extension number."
            },
            sAddress: {
                sp: "Por favor, ingresa una dirección de empresa correcta.",
                en: "Please, input a correct enterprise location address."
            },
            sLocationCityName: {
                sp: "Por favor, ingresa un nombre de ciudad de empresa correcta.",
                en: "please, input a correct location city name."
            },
            sOptionalAddress: {
                sp: "Por favor, ingresa una dirección opcional para empresa correcta.",
                en: "Please, input a correct location optional address."
            },
            sLocationStateId: {
                sp: "Por favor, inserta un id correcto de estado correcto.",
                en: "Please, input a correct location state id."
            },
        },
        SalesOrderItems: {
            sSalesOrderId: {
                sp: "Por favor, ingresa un id de pedido de venta correcto.",
                en: "Please, input a correct sales order id."
            },
            sRawMaterialId: {
                sp: "Por favor, ingresa un id de material correcto.",
                en: "Please, input a correct raw material id."
            },
            sMeasurementUnitCode: {
                sp: "Por favor, ingresa un código de unidad de medida correcto.",
                en: "Please, input a correct measurement unit code."
            },
            dRawMaterialWeight: {
                sp: "Por favor, ingresa un pesaje de materia prima correcto.",
                en: "Please, input a correct raw material weight."
            },
            dUnitPrice: {
                sp: "Por favor, ingresa un precio unitario correcto.",
                en: "Please, input a correct unit price."
            }
        },
        SalesOrders: {
            sSalesOrderId: {
                sp: "Por favor, ingresa un valor correcto para el id de pedido de venta.",
                en: "Please, input a correct value for sales order."
            },
            dInitialWeight: {
                sp: "Por favor, ingresa un peso inicial correcto.",
                en: "Please enter a correct initial weight."
            },
            sCustomerId: {
                sp: "Por favor, ingresa un id de cliente correcto.",
                en: "Please enter a correct customer id."
            },
            sDriverLicensePlate: {
                sp: "Por favor, ingresa una matrícula de vehículo correcta.",
                en: "Please enter a correct driver license plate."
            },
            sDriverFullName: {
                sp: "Por favor, ingresa un nombre completo de conductor correcto.",
                en: "Please enter a correct driver full name."
            },
            sReference: {
                sp: "Por favor, ingresa un número de referencia correcto.",
                en: "Please, input a correct reference number."
            }
        },
        SalesOrderStatus: {
            sSalesOrderStatusId: {
                sp: "Por favor, ingresa un valor correcto para id de status de pedido de venta.",
                en: "Please, input a correct value for sales order status id"
            }
        },
        PurchaseOrderItems: {
            sPurchaseOrderId: {
                sp: "Por favor, ingresa un id de ordende compra correcto.",
                en: "Please, input a correct purchase order id."
            },
            sRawMaterialId: {
                sp: "Por favor, ingresa un id de material correcto.",
                en: "Please, input a correct raw material id."
            },
            sMeasurementUnitCode: {
                sp: "Por favor, ingresa un código de unidad de medida correcto.",
                en: "Please, input a correct measurement unit code."
            },
            dRawMaterialWeight: {
                sp: "Por favor, ingresa un pesaje de materia prima correcto.",
                en: "Please, input a correct raw material weight."
            },
            dUnitPrice: {
                sp: "Por favor, ingresa un precio unitario correcto.",
                en: "Please, input a correct unit price."
            }
        },
        PurchaseOrders: {
            sPurchaseOrderId: {
                sp: "Por favor, ingresa un valor correcto para el id de orden de compra.",
                en: "Please, input a correct value for purchase order id."
            },
            dInitialWeight: {
                sp: "Por favor, ingresa un peso inicial correcto.",
                en: "Please enter a correct initial weight."
            },
            sVendorId: {
                sp: "Por favor, ingresa un id de vendedor correcto.",
                en: "Please enter a correct vendor id."
            },
            sDriverLicensePlate: {
                sp: "Por favor, ingresa una matrícula de vehículo correcta.",
                en: "Please enter a correct driver license plate."
            },
            sDriverFullName: {
                sp: "Por favor, ingresa un nombre completo de conductor correcto.",
                en: "Please enter a correct driver full name."
            },
            sReference: {
                sp: "Por favor, ingresa un número de referencia correcto.",
                en: "Please, input a correct reference number."
            },
            sDriverIdentifierImageKey: {
                sp: "Por favor, ingresa un valor correcto para la imagen de identificación de conductor.",
                en: "Please, input a correct value for driver identifier image key."
            }
        },
        PurchaseOrderStatus: {
            sPurchaseOrderStatusId: {
                sp: "Por favor, ingresa un valor correcto para el id de estado de una orden de compra.",
                en: "Please, input a correct value for purchase order status id."
            }
        },
        PurchaseOrderStatusRecord: {
            tStart: {
                sp: "La fecha de inicio ingresada no es válida, asgurese de usar un formato YYYY-MM-DD.",
                en: "Entered start date is invalid, make sure to use a YYYY-MM-DD format."
            },
            tEnd: {
                sp: "La fecha final ingresada no es válida, asegurese de que sea mayor a la inicial y que cumpla con el formato YYYY-MM-DD.",
                en: "End date entered is not valid, make sure it is greater than the initial one and that it complies with the YYYY-MM-DD format."
            }
        },
        MeasurementUnits: {
            sMeasurementUnitId: {
                sp: "Por favor, ingresa un id válido para unidad de medida.",
                en: "Please, input a correct id for measurement unit."
            }
        },
        RawMaterials: {
            sColorKey: {
                sp: "Por favor, ingresa una clave de color correcta.",
                en: "Please, input a correct color key."
            },
            sRawMaterialId: {
                sp: "Por favor, ingresa un id de materia prima correcto.",
                en: "Please, input a correct raw material id."
            },
            sName: {
                sp: "Por favor, ingresa un nombre correcto para materia prima.",
                en: "Please, input a correct name for raw material."
            },
            sKey: {
                sp: "Por favor, ingresa un valor correcto para la clave de materia prima.",
                en: "Please, input a correct value for raw material key."
            }
        },
        RawMaterialTransactions: {
            dQuantity: {
                sp: "Por favor, ingresa un número correcto para la cantidad de inventario de materia prima.",
                en: "Please, input a correct number for raw material inventory quantity."
            },
            sComments: {
                sp: "Por favor, ingresa un comentario correcto para inventario de materia prima.",
                en: "Please, input a correct comment for raw material inventory,"
            },
            sRawMaterialTransactionId: {
                sp: "Por favor, ingresa un id correcto para el movimiento de inventario de materia prima.",
                en: "Please, input a correct raw material transaction id."
            },
            tStart: {
                sp: "La fecha de inicio ingresada no es válida, asgurese de usar un formato YYYY-MM-DD.",
                en: "Entered start date is invalid, make sure to use a YYYY-MM-DD format."
            },
            tEnd: {
                sp: "La fecha final ingresada no es válida, asegurese de que sea mayor a la inicial y que cumpla con el formato YYYY-MM-DD.",
                en: "End date entered is not valid, make sure it is greater than the initial one and that it complies with the YYYY-MM-DD format."
            }
        },
        RawMaterialBasePriceRecord: {
            tStart: {
                sp: "La fecha de inicio ingresada no es válida, asgurese de usar un formato YYYY-MM-DD.",
                en: "Entered start date is invalid, make sure to use a YYYY-MM-DD format."
            },
            tEnd: {
                sp: "La fecha final ingresada no es válida, asegurese de que sea mayor a la inicial y que cumpla con el formato YYYY-MM-DD.",
                en: "End date entered is not valid, make sure it is greater than the initial one and that it complies with the YYYY-MM-DD format."
            },
            dAmount: {
                sp: "Por favor, ingresa un valor correcto para el precio de materia prima.",
                en: "Please, input a correct value for raw material base price."
            }
        },
        VendorEnterprises: {
            sVendorEnterpriseId: {
                sp: "Por favor, ingresa un id de empresa correcto.",
                en: "Please, input a correct vendor enterprise id."
            },
            sPublicName: {
                sp: "Por favor, ingresa un nombre de empresa público correcto.",
                en: "Please, input a correct public vendor enterprise name."
            },
            sBussinessName: {
                sp: "Por favor, ingresa un nombre comercial de empresa correcto.",
                en: "Please, input a correct bussines vendor enterprise name."
            },
            sManagerFullName: {
                sp: "Por favor, ingresa un nombre de encargado de la empresa correcto.",
                en: "Please, input a correct vendor enterprise manager fullname."
            },
            sManagerCountryCallingCode: {
                sp: "Por favor, ingresa un valor correcto para la clave télefonica para télefono de encargado de una empresa vendedora.",
                en: "Please, input a correct value for manager country calling code of vendor enterprise."
            },
            sManagerAreaCallingCode: {
                sp: "Por favor, ingresa un valor correcto para la clave télefonica de aréa para télefono de encargado de una empresa vendedora.",
                en: "Please, input a correct value for manager area calling code of vendor enterprise."
            },
            sManagerPhoneNumber: {
                sp: "Por favor, ingresa un valor correcto para número télefonico de encargado de una empresa.",
                en: "Please, input a correct manager phone number."
            },
            sManagerPhoneExtension: {
                sp: "Por favor, ingresa una clave de extensión correcta para encargado de una empresa vendedora.",
                en: "Please, input a correct manager phone extension for vendor enterprise."
            },
            sManagerEmail: {
                sp: "Por favor ingresa un correo electrónico de encargado de empresa vendedora correcto.",
                en: "Please, input a correct vendor enterprise manager email."
            },
            sEmail: {
                sp: "Por favor, ingresa un correo electrónico de una empresa vendedora.",
                en: "Please, input a correct vendor enterprise email."
            },
            sCountryCallingCode: {
                sp: "Por favor, ingresa una clave teléfonica de país correcta para teléfono de una empresa vendedora.",
                en: "Please, input a correct country calling code for vendor enterprise phone number."
            },
            sAreaCallingCode: {
                sp: "Por favor, ingresa una clave teléfonica de aréa correcta para teléfono de una empresa vendedora.",
                en: "Please, input a correct area calling code for vendor enterprise phone number."
            },
            sPhoneNumber: {
                sp: "Por favor, ingresa un número de teléfono correcto para empresa vendedora.",
                en: "Please, input a correct vendor enterprise phone number."
            },
            sPhoneNumberExtension: {
                sp: "Por favor, ingresa un número de extensión correcto para empresa vendedora.",
                en: "Please, input a correct vendor enterprise phone number."
            },
            sLocationAddress: {
                sp: "Por favor, ingresa una dirección correcta para empresa vendedora.",
                en: "Please, input a correct vendor enterprise location address."
            },
            sLocationOptionalAddress: {
                sp: "Por favor, ingresa una dirección opcional de empresa vendedora.",
                en: "Please, input a correct vendor enterprise location address."
            },
            sLocationCityName: {
                sp: "Por favor, ingresa un nombre de ciudad correcto para dirección de una empresa vendedora.",
                en: "Please, input a correct vendor enterprise location city name."
            },
            sLocationStateId: {
                sp: "Por favor, ingresa un id de estado correcto para dirección de empresa vendedora.",
                en: "Please, input a correct vendor enterprise location state id."
            },
            sLocationZipCode: {
                sp: "Por favor, ingresa un código postal correcto para dirección de empresa vendedora.",
                en: "Please, input a correct vendor enterprise location zip code."
            },
            sTaxId: {
                sp: "Por favor, ingresa un id de facturación correcto de empresa vendedora.",
                en: "Please, input a correct vendor enterprise tax id."
            },
            sTaxEmail: {
                sp: "Por favor, ingresa un correo electrónico de facturación de empresa vendedora correcto.",
                en: "Please, input a correct vendor enterprise tax email."
            },
            sTaxAddress: {
                sp: "Por favor, ingresa una dirección de facturación de empresa vendedora correcto.",
                en: "Please, input a correct vendor enterprise tax address."
            },
            sTaxOptionalAddress: {
                sp: "Por favor, ingresa una dirección opcional de facturación de empresa vendedora correcto.",
                en: "Please, input a correct vendor enterprise optional tax address."
            },
            sTaxLocationCityName: {
                sp: "Por favor, ingresa un nombre de ciudad de facturación de empresa vendedora correcto.",
                en: "Please, input a correct vendor enterprise tax location city name."
            },
            sTaxLocationStateId: {
                sp: "Por favor, ingresa un id correcto de estado de facturación de empresa vendedora.",
                en: "Please, input a correct vendor enterprise tax location state id."
            },
            sTaxLocationZipCode: {
                sp: "Por favor, ingresa un código postal correcto para dirección de facturación de empresa vendedora.",
                en: "Please, input a correct vendor enterprise tax location zip code."
            }
        },
        VendorPerson: {
            sFullName: {
                sp: "Por favor, ingresa un nombre completo correcto.",
                en: "Please, input a correct full name."
            },
            sEmail: {
                sp: "Por favor, ingresa un correo electrónico correcto.",
                en: "Please, input a correct email."
            },
            sCountryCallingCode: {
                sp: "Por favor, ingresa un código de país correcto.",
                en: "Please, input a correct country calling code."
            },
            sAreaCallingCode: {
                sp: "Por favor, ingresa un código de área correcto.",
                en: "Please, input a correct area calling code."
            },
            sPhoneNumber: {
                sp: "Por favor, ingresa un número teléfonico correcto.",
                en: "Please, input a correct phone number."
            },
            sPhoneNumberExtension: {
                sp: "Por favor, ingresa un número de extensión correcto.",
                en: "Please, input a correct phone number extension."
            },
            sAddress: {
                sp: "Por favor, ingresa una dirección correcta.",
                en: "Please, input a correct address."
            },
            sOptionalAddress: {
                sp: "Por favor, ingresa una dirección opcional correcta.",
                en: "Please, input a correct optional address."
            },
            sLocationCityName: {
                sp: "Por favor, ingresa un nombre de ciudad correcto.",
                en: "Please, input a correct location city name."
            },
            sLocationStateId: {
                sp: "Por favor, ingresa un id de estado correcto.",
                en: "Please, input a correct location state id."
            },
            sZipCode: {
                sp: "Por favor, ingresa un código postal correcto.",
                en: "Please, input a correct zip code."
            },
        }
    },
    Middleware: {
        undefinedToken: {
            sp: "Token de verificación no válido, verificar la información proporcionada.",
            en: "Invalid verification token, please verify the information provided."
        },
        invalidToken: {
            sp: "El token de sesión no es correcto.",
            en: "The session token is not correct."
        },
        accessDenied: {
            sp: "Accesso denegado.",
            en: "Access denied."
        },
        invalidFile: {
            sp: "Formato de documento no soportado.",
            en: "File format not supported.",
        }
    },
    Emails: {
        WelcomeEnterprise: {
            title: {
                sp: "Bienvenido a",
                en: "Welcome to"
            },
            follow: {
                sp: "Haz click en el siguiente botón para verificar tu cuenta.",
                en: "Click the button below to verify your email."
            },
            button: {
                sp: "Verificar",
                en: "Verify"
            }
        },
        WelcoleEmployee: {
            title: {
                sp: "Bienvenido a",
                en: "Welcome to"
            },
            follow: {
                sp: "Un usuario administrador te ha registrado en la plataforma, haz click en el siguiente botón para actualizar tu contraseña.",
                en: "An administrator user has registered you on the platform, click on the following button to update your password."
            },
            button: {
                sp: "Actualizar contraseña",
                en: "Update password"
            }
        },
        RecoveryPassword: {
            title: {
                sp: "Recuperación de contraseña",
                en: "Recovery password"
            },
            follow: {
                sp: "Haz click en el siguiente botón para actualizar tu contraseña.",
                en: "Click on the following button to update your password."
            },
            button: {
                sp: "Recuperar contraseña",
                en: "Recovery password"
            }
        }
    }
}