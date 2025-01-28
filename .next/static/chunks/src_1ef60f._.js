(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_1ef60f._.js", {

"[project]/src/service/AuthService.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isAuthenticated": (()=>isAuthenticated),
    "login": (()=>login)
});
(()=>{
    const e = new Error("Cannot find module 'axios'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
//import authHeader from "./AuthHeaderService";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$jwt$2d$decode$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jwt-decode/build/jwt-decode.esm.js [app-client] (ecmascript)");
;
;
//const API_BACKEND = process.env.REACT_APP_API_BACKEND;
const API_URL = '/nomina/api/auth/signin';
const login = (username, password)=>{
    return axios.post(API_URL, {
        username,
        password
    }).then((response)=>{
        //		const token = response.data.token;
        //		token && sessionStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
    });
};
const isAuthenticated = ()=>{
    const user = sessionStorage.getItem('user');
    if (!user) {
        return {};
    }
    return JSON.parse(user);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(full-page)/auth/login/LoginContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LoginContext": (()=>LoginContext),
    "LoginProvider": (()=>LoginProvider),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$AuthService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/service/AuthService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$full$2d$page$292f$auth$2f$login$2f$Login$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(full-page)/auth/login/Login.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const LoginContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const LoginProvider = ({ children })=>{
    _s();
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [superAdmin, setSuperAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [administrador, setAdministrador] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [autorizador, setAutorizador] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [solicitante, setSolicitante] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [configuracion, setConfiguracion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Valores predeterminados de la configuración
    const defaultValuesConfiguracion = {
        periodo: null,
        subPeriodo: null,
        lstNivel: null,
        lstCarrera: null
    };
    // Verifica si el usuario está autenticado
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginProvider.useEffect": ()=>{
            const checkLoggedIn = {
                "LoginProvider.useEffect.checkLoggedIn": async ()=>{
                    let cuser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$AuthService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAuthenticated"])();
                    if (cuser === null) {
                        sessionStorage.setItem('user', '');
                        cuser = '';
                    }
                    setCurrentUser(cuser); // Aquí se decodifica el user, el cual es el token
                }
            }["LoginProvider.useEffect.checkLoggedIn"];
            checkLoggedIn();
        }
    }["LoginProvider.useEffect"], []);
    // Función para manejar los roles de seguridad
    const handleSecurity = ()=>{
        const token = currentUser?.token;
        if (token) {
            setSuperAdmin(token?.['Super admin'] || false);
            setAdministrador(token?.Administrador || false);
            setAutorizador(token?.Autorizador || false);
            setSolicitante(token?.Solicitante || false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginContext.Provider, {
        value: {
            currentUser,
            setCurrentUser,
            superAdmin,
            administrador,
            autorizador,
            solicitante,
            handleSecurity,
            activeIndex,
            setActiveIndex,
            configuracion,
            setConfiguracion,
            defaultValuesConfiguracion
        },
        children: currentUser?.token ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$full$2d$page$292f$auth$2f$login$2f$Login$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/(full-page)/auth/login/LoginContext.js",
            lineNumber: 66,
            columnNumber: 46
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(full-page)/auth/login/LoginContext.js",
        lineNumber: 50,
        columnNumber: 9
    }, this);
};
_s(LoginProvider, "jQOjaAQdV8pe84s/nkXG6ono454=");
_c = LoginProvider;
const __TURBOPACK__default__export__ = LoginContext;
var _c;
__turbopack_refresh__.register(_c, "LoginProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(full-page)/auth/login/RecuperaContra.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
(()=>{
    const e = new Error("Cannot find module '@/service/UsuarioService'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$primereact$2e$all$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/primereact/primereact.all.esm.min.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const RecuperaContra = (props)=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        email: ""
    });
    const { control, handleSubmit, formState: { errors }, reset, getValues, setError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "RecuperaContra.useForm.useMemo": ()=>{
                return formData;
            }
        }["RecuperaContra.useForm.useMemo"], [
            formData
        ])
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecuperaContra.useEffect": ()=>{
            reset(formData);
        }
    }["RecuperaContra.useEffect"], [
        formData
    ]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])("translation");
    const usuarioService = new UsuarioService();
    const onSubmit = (event)=>{
        event.preventDefault();
        let { email } = getValues();
        console.log('Email : ' + email.length);
        if (!event.target.value.length) {
            setError("email", {
                message: "Escriba su usuario o correo electrónico"
            });
            return;
        }
        usuarioService.actualizaPasswordEmail(event.target.value).then((data)=>{
            props.visible(false);
        }).catch(function(error) {
            if (error.response && error.response.status >= 400) {
                const errores = error.response.data?.errores?.errores;
                setError("email", {
                    message: errores || "El usuario o correo electrónico no existe"
                });
            }
        });
    };
    const getFormErrorMessage = (name)=>{
        return errors[name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            className: "p-error",
            children: errors[name].message
        }, void 0, false, {
            fileName: "[project]/src/app/(full-page)/auth/login/RecuperaContra.js",
            lineNumber: 55,
            columnNumber: 32
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-fluid",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-d-flex",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-m-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    id: "recuperaContra-form",
                    className: "p-fluid",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "field col-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-card",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-card-body",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "p-float-label p-input-icon-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "pi pi-envelope"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(full-page)/auth/login/RecuperaContra.js",
                                                lineNumber: 67,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                                name: "email",
                                                control: control,
                                                rules: {
                                                    required: t("login:required.email")
                                                },
                                                render: ({ field, fieldState })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$primereact$2e$all$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputText"], {
                                                        id: field.name,
                                                        ...field,
                                                        className: fieldState.error ? 'p-invalid' : '',
                                                        onChange: (e)=>field.onChange(e.target.value),
                                                        onKeyDown: (event)=>{
                                                            if (event.key === "Enter") {
                                                                event.preventDefault();
                                                                onSubmit(event);
                                                            }
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(full-page)/auth/login/RecuperaContra.js",
                                                        lineNumber: 73,
                                                        columnNumber: 49
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(full-page)/auth/login/RecuperaContra.js",
                                                lineNumber: 68,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                children: t("login:label.email")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(full-page)/auth/login/RecuperaContra.js",
                                                lineNumber: 87,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(full-page)/auth/login/RecuperaContra.js",
                                        lineNumber: 66,
                                        columnNumber: 37
                                    }, this),
                                    getFormErrorMessage("email")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(full-page)/auth/login/RecuperaContra.js",
                                lineNumber: 65,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(full-page)/auth/login/RecuperaContra.js",
                            lineNumber: 64,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(full-page)/auth/login/RecuperaContra.js",
                        lineNumber: 63,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(full-page)/auth/login/RecuperaContra.js",
                    lineNumber: 62,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(full-page)/auth/login/RecuperaContra.js",
                lineNumber: 61,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(full-page)/auth/login/RecuperaContra.js",
            lineNumber: 60,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(full-page)/auth/login/RecuperaContra.js",
        lineNumber: 59,
        columnNumber: 9
    }, this);
};
_s(RecuperaContra, "j5lhBTddDoWdu4h/M4CeVu+Xf1E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = RecuperaContra;
const __TURBOPACK__default__export__ = RecuperaContra;
var _c;
__turbopack_refresh__.register(_c, "RecuperaContra");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(full-page)/auth/login/Login.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$AuthService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/service/AuthService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$full$2d$page$292f$auth$2f$login$2f$LoginContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(full-page)/auth/login/LoginContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$jwt$2d$decode$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jwt-decode/build/jwt-decode.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$full$2d$page$292f$auth$2f$login$2f$RecuperaContra$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(full-page)/auth/login/RecuperaContra.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$primereact$2e$all$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/primereact/primereact.all.esm.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$dialog$2f$dialog$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/primereact/dialog/dialog.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const Login = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])([
        "translation",
        "login"
    ]);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: "",
        password: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRecoverPasswordDialogVisible, setIsRecoverPasswordDialogVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { setCurrentUser, handleSecurity, activeIndex, setActiveIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$full$2d$page$292f$auth$2f$login$2f$LoginContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginContext"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleLogin = async (username, password)=>{
        sessionStorage.clear();
        setCurrentUser(null);
        console.log(JSON.stringify(formData));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$AuthService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["login"])(username, password).then((response)=>{
            setCurrentUser(response);
            const token = response.token;
            sessionStorage.setItem("token", token);
            handleSecurity();
            setActiveIndex(0);
        }).catch(function(error) {
            //      console.log(error.toJSON());
            if (error.response) {
                // La respuesta fue hecha y el servidor respondió con un código de estados
                // que esta fuera del rango de 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: "Error para inicio de sesión",
                    life: 3000
                });
            }
        });
        router.push("/");
    };
    const btn_anterior = ()=>{
        setActiveIndex(0);
    };
    const { control, formState: { errors }, handleSubmit, reset, clearErrors, getValues, setError, trigger } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "Login.useForm.useMemo": ()=>{
                return formData;
            }
        }["Login.useForm.useMemo"], [
            formData
        ])
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Login.useEffect": ()=>{
            reset(formData);
        }
    }["Login.useEffect"], [
        formData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Login.useEffect": ()=>{
            setActiveIndex(0);
        }
    }["Login.useEffect"], []);
    const btn_siguiente = (event)=>{
        if (event.key === "Enter") {
            event.preventDefault();
            let { username } = getValues();
            let formDataCopy = Object.assign({}, formData);
            formDataCopy['username'] = username;
            setFormData(formDataCopy);
            if (!activeIndex && !isRecoverPasswordDialogVisible && !username.length) {
                setError("username", {
                    message: "Escriba su usuario o correo electrónico"
                });
                return;
            }
            setActiveIndex(1);
        }
    };
    const btn_pwd = (event)=>{
        if (event.key === "Enter") {
            event.preventDefault();
            let { password } = getValues();
            if (!password.length) {
                setError("password", {
                    message: "Escriba su contraseña"
                });
                return;
            }
            handleLogin(formData.username, password);
        }
    };
    const getFormErrorMessage = (name)=>{
        return errors[name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            className: "p-error",
            children: errors[name].message
        }, void 0, false, {
            fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
            lineNumber: 150,
            columnNumber: 23
        }, this);
    };
    const showError = (summary, detalle)=>{
        toast.current.show({
            severity: "error",
            summary: summary,
            detail: detalle,
            life: 4000
        });
    };
    const header = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-content-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/cdch_azul.png",
                    alt: "Picture of the author",
                    width: 100,
                    height: 100,
                    priority: true,
                    style: {
                        width: "100px",
                        height: "auto"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            activeIndex > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-col-12 p-md-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$primereact$2e$all$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        icon: "pi pi-arrow-left",
                        className: "p-button-text",
                        "aria-label": "pi-arrow-left",
                        onClick: ()=>btn_anterior(),
                        label: `Usuario: ` + formData.username
                    }, void 0, false, {
                        fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                        lineNumber: 178,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)
            }, void 0, false)
        ]
    }, void 0, true);
    const title = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            activeIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: t("login:rotulo.login")
            }, void 0, false, {
                fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                lineNumber: 193,
                columnNumber: 29
            }, this),
            activeIndex === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: t("login:rotulo.contra")
            }, void 0, false, {
                fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                lineNumber: 194,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$primereact$2e$all$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                ref: toast
            }, void 0, false, {
                fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$primereact$2e$all$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                header: header,
                title: title,
                className: "sm:w-25rem",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    id: "login-form",
                    className: "fluid formgrid grid",
                    children: [
                        activeIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "field col-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                        name: "username",
                                        control: control,
                                        rules: {
                                            required: t("login:required.username")
                                        },
                                        render: ({ field, fieldState })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$primereact$2e$all$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])({
                                                            "p-error": errors.username
                                                        }),
                                                        htmlFor: field.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                                        lineNumber: 224,
                                                        columnNumber: 23
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "p-float-label p-input-icon-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "pi pi-user"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                                                lineNumber: 229,
                                                                columnNumber: 25
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$primereact$2e$all$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputText"], {
                                                                id: field.name,
                                                                ...field,
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$primereact$2e$all$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])({
                                                                    "p-invalid": fieldState.invalid
                                                                }),
                                                                onKeyDown: (e)=>btn_siguiente(e),
                                                                onChange: (e)=>{
                                                                    field.onChange(e.target.value);
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                                                lineNumber: 230,
                                                                columnNumber: 25
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: field.name,
                                                                children: t("login:label.usuario")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                                                lineNumber: 241,
                                                                columnNumber: 25
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                                        lineNumber: 228,
                                                        columnNumber: 23
                                                    }, void 0),
                                                    getFormErrorMessage(field.name)
                                                ]
                                            }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                        lineNumber: 218,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "field col-12 p-jc-center ",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$primereact$2e$all$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        label: t("login:label.recuperaContra"),
                                        className: "p-button-text",
                                        onClick: (event)=>{
                                            event.preventDefault();
                                            setIsRecoverPasswordDialogVisible(true);
                                        },
                                        style: {
                                            fontSize: "0.9em"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                        lineNumber: 251,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        activeIndex === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-field p-col-12 p-md-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                    name: "password",
                                    control: control,
                                    rules: {
                                        required: t("login:required.password")
                                    },
                                    render: ({ field, fieldState })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$primereact$2e$all$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])({
                                                        "p-error": errors.password
                                                    }),
                                                    htmlFor: field.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                                    lineNumber: 274,
                                                    columnNumber: 23
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "p-float-label p-input-icon-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$primereact$2e$all$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Password"], {
                                                            id: field.name,
                                                            ...field,
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$primereact$2e$all$2e$esm$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])({
                                                                "p-invalid": fieldState.error
                                                            }),
                                                            onKeyDown: (e)=>btn_pwd(e),
                                                            onChange: (e)=>{
                                                                field.onChange(e.target.value);
                                                            },
                                                            feedback: false,
                                                            toggleMask: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                                            lineNumber: 279,
                                                            columnNumber: 25
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: field.name,
                                                            children: t("login:label.password")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                                            lineNumber: 292,
                                                            columnNumber: 25
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                                    lineNumber: 278,
                                                    columnNumber: 23
                                                }, void 0),
                                                getFormErrorMessage(field.name)
                                            ]
                                        }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                    lineNumber: 268,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this)
                        }, void 0, false)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$dialog$2f$dialog$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                header: t('login:rotulo.recuperaContra'),
                className: "p-fluid",
                style: {
                    width: '30vw'
                },
                modal: true,
                visible: isRecoverPasswordDialogVisible,
                blockScroll: false,
                onHide: (e)=>{
                    reset();
                    clearErrors();
                    setIsRecoverPasswordDialogVisible(false);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$full$2d$page$292f$auth$2f$login$2f$RecuperaContra$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    visible: setIsRecoverPasswordDialogVisible
                }, void 0, false, {
                    fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                    lineNumber: 320,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
                lineNumber: 307,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(full-page)/auth/login/Login.js",
        lineNumber: 199,
        columnNumber: 5
    }, this);
};
_s(Login, "5gpl9jw8196FdK/GSaaOMwRXCkY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = Login;
const __TURBOPACK__default__export__ = Login;
var _c;
__turbopack_refresh__.register(_c, "Login");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/layout/context/layoutcontext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LayoutContext": (()=>LayoutContext),
    "LayoutProvider": (()=>LayoutProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const LayoutContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({});
const LayoutProvider = (props)=>{
    _s();
    const [breadcrumbs, setBreadcrumbs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [layoutConfig, setLayoutConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ripple: false,
        inputStyle: "outlined",
        menuMode: "static",
        menuTheme: "colorScheme",
        colorScheme: "light",
        theme: "indigo",
        scale: 14
    });
    const [layoutState, setLayoutState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        overlaySubmenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false,
        resetMenu: false,
        sidebarActive: false,
        anchored: false
    });
    const onMenuToggle = ()=>{
        if (isOverlay()) {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    overlayMenuActive: !prevLayoutState.overlayMenuActive
                }));
        }
        if (isDesktop()) {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive
                }));
        } else {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive
                }));
        }
    };
    const showConfigSidebar = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                configSidebarVisible: true
            }));
    };
    const showProfileSidebar = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                profileSidebarVisible: !prevLayoutState.profileSidebarVisible
            }));
    };
    const isOverlay = ()=>{
        return layoutConfig.menuMode === "overlay";
    };
    const isSlim = ()=>{
        return layoutConfig.menuMode === "slim";
    };
    const isSlimPlus = ()=>{
        return layoutConfig.menuMode === "slim-plus";
    };
    const isHorizontal = ()=>{
        return layoutConfig.menuMode === "horizontal";
    };
    const isDesktop = ()=>{
        return window.innerWidth > 991;
    };
    const value = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showConfigSidebar,
        showProfileSidebar,
        isSlim,
        isSlimPlus,
        isHorizontal,
        isDesktop,
        breadcrumbs,
        setBreadcrumbs
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayoutContext.Provider, {
        value: value,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                            children: "PrimeReact - APOLLO"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/context/layoutcontext.tsx",
                            lineNumber: 115,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                            charSet: "UTF-8"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/context/layoutcontext.tsx",
                            lineNumber: 116,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                            name: "description",
                            content: "The ultimate collection of design-agnostic, flexible and accessible React UI Components."
                        }, void 0, false, {
                            fileName: "[project]/src/layout/context/layoutcontext.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                            name: "robots",
                            content: "index, follow"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/context/layoutcontext.tsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                            name: "viewport",
                            content: "initial-scale=1, width=device-width"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/context/layoutcontext.tsx",
                            lineNumber: 122,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                            property: "og:type",
                            content: "website"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/context/layoutcontext.tsx",
                            lineNumber: 126,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                            property: "og:title",
                            content: "Apollo by PrimeReact for Next.js"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/context/layoutcontext.tsx",
                            lineNumber: 127,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                            property: "og:url",
                            content: "https://www.primefaces.org/apollo-react"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/context/layoutcontext.tsx",
                            lineNumber: 131,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                            property: "og:description",
                            content: "The ultimate collection of design-agnostic, flexible and accessible React UI Components."
                        }, void 0, false, {
                            fileName: "[project]/src/layout/context/layoutcontext.tsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                            property: "og:image",
                            content: "https://www.primefaces.org/static/social/apollo-react.png"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/context/layoutcontext.tsx",
                            lineNumber: 139,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                            property: "og:ttl",
                            content: "604800"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/context/layoutcontext.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                            rel: "icon",
                            href: `/favicon.ico`,
                            type: "image/x-icon"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/context/layoutcontext.tsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/layout/context/layoutcontext.tsx",
                    lineNumber: 114,
                    columnNumber: 17
                }, this),
                props.children
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/layout/context/layoutcontext.tsx",
        lineNumber: 112,
        columnNumber: 9
    }, this);
};
_s(LayoutProvider, "bj6RSumeEGRz4L+9FauVBKHBmZM=");
_c = LayoutProvider;
var _c;
__turbopack_refresh__.register(_c, "LayoutProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_1ef60f._.js.map