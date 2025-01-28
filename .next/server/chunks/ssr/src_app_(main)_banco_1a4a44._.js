module.exports = {

"[project]/src/app/(main)/banco/BancoContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BancoContext": (()=>BancoContext),
    "BancoProvider": (()=>BancoProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const BancoContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const BancoProvider = (props)=>{
    const defaultValues = {
        idBanco: "",
        nombre: ""
    };
    const [banco, setBanco] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultValues);
    const value = {
        banco,
        setBanco
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BancoContext.Provider, {
        value: value,
        children: props.children
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/banco/BancoContext.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
};
}}),
"[project]/src/app/(main)/banco/Banco.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
//import BancoService from "@/service/BancoService";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$banco$2f$BancoContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(main)/banco/BancoContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/primereact/button/button.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$toolbar$2f$toolbar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/primereact/toolbar/toolbar.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$toast$2f$toast$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/primereact/toast/toast.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/primereact/inputtext/inputtext.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$datatable$2f$datatable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/primereact/datatable/datatable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$column$2f$column$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/primereact/column/column.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$dialog$2f$dialog$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/primereact/dialog/dialog.esm.js [app-ssr] (ecmascript)");
//import "moment-timezone";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$utils$2f$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/primereact/utils/utils.esm.js [app-ssr] (ecmascript)");
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
;
const Banco = ()=>{
    const [showMessage, setShowMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lstBanco, setLstBanco] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dlgBanco, setDlgBanco] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { banco, setBanco } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$banco$2f$BancoContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BancoContext"]);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])([
        "translation",
        "banco"
    ]);
    //const bancoService = new BancoService();
    const criterioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const defaultValues = {
        idBanco: "",
        nombre: ""
    };
    /* const obtenerBanco = (event : React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key  === 'Enter') {
      listaBanco(event.currentTarget.value);
    }
  };

  const listaBanco = (pCriterio: string | undefined) => {
    bancoService.obtenerBanco(pCriterio).then((data: Interfaces.IBanco[]) =>
        setLstBanco(data)
    );
  };

  const seleccionaBanco = (pBanco: Interfaces.IBanco) => {
    reset(defaultValues);
    bancoService.seleccionaBanco(pBanco).then((data: Interfaces.IBanco) => {
      setBanco(data);
      setDlgBanco(true);
    });
  }; */ const headerBanco = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex align-items-center justify-content-center gap-2",
        children: banco.idBanco ? t("banco:rotulo.actualizar") : t("banco:rotulo.agregar").concat(" ") + banco.nombre
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
    /* const agregaBanco = (pBanco : Interfaces.IBanco) => {
    bancoService
      .agregaBanco(pBanco)
      .then((data: Interfaces.IBanco) => {
        setBanco(data);
        setDlgBanco(false);
        listaBanco(criterioRef.current?.value);
        toast.current?.show({
          severity: "success",
          summary: "Éxito",
          detail: "El banco se agregó correctamente",
          life: 3000,
        });
      })
      .catch(() => {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail:
            "No se ha agregado correctamente. Por favor, inténtalo de nuevo.",
          life: 3000,
        });
      });
  }; */ /* const actualizaBanco = (pBanco: Interfaces.IBanco) => {
    bancoService
      .actualizaBanco(pBanco)
      .then((data: Interfaces.IBanco ) => {
        setDlgBanco(false);
        setBanco(data);
        listaBanco(criterioRef.current?.value);
        toast.current?.show({
          severity: "success",
          summary: "Éxito",
          detail: "El banco se actualizó correctamente",
          life: 3000,
        });
      })
      .catch((error) => {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail:
            "No se ha actualizado correctamente. Por favor, inténtalo de nuevo.",
          life: 3000,
        });
      });
  };
 */ const iniciaBanco = ()=>{
        setBanco(defaultValues);
        setDlgBanco(true);
    };
    const { control, formState: { errors }, handleSubmit, reset, clearErrors, trigger } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: defaultValues
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        reset(banco);
    }, [
        banco
    ]);
    const actionTemplate = (rowData)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                icon: "pi pi-pencil",
                className: "p-button-rounded",
                onClick: ()=>{
                //seleccionaBanco(rowData);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this)
        }, void 0, false);
    };
    const rightFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-grid p-fluid",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-col-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-inputgroup",
                children: [
                    banco.idBanco && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        tooltip: t("boton.actualizar"),
                        tooltipOptions: {
                            position: "bottom",
                            mouseTrack: false,
                            mouseTrackTop: 15
                        },
                        icon: "pi pi-undo",
                        className: "p-button-rounded",
                        form: "banco-form",
                        onClick: handleSubmit((data)=>onAgregarSubmit(data))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                        lineNumber: 164,
                        columnNumber: 13
                    }, this),
                    !banco.idBanco && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        tooltip: t("boton.agregar"),
                        tooltipOptions: {
                            position: "bottom",
                            mouseTrack: false,
                            mouseTrackTop: 15
                        },
                        icon: "pi pi-check",
                        className: "p-button-rounded",
                        form: "banco-form",
                        onClick: handleSubmit((data)=>onAgregarSubmit(data))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                        lineNumber: 180,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(main)/banco/Banco.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
    const rightFooterCancelar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-grid p-fluid",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-col-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-inputgroup",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    tooltip: t("boton.cancelar"),
                    tooltipOptions: {
                        position: "bottom",
                        mouseTrack: false,
                        mouseTrackTop: 15
                    },
                    icon: "pi pi-ban",
                    className: "p-button-rounded",
                    onClick: (event)=>{
                        event.preventDefault();
                        setDlgBanco(false);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                    lineNumber: 204,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                lineNumber: 203,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(main)/banco/Banco.tsx",
            lineNumber: 202,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
    const dlgFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$toolbar$2f$toolbar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toolbar"], {
        end: rightFooter,
        start: rightFooterCancelar
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
        lineNumber: 224,
        columnNumber: 5
    }, this);
    const getFormErrorMessage = (name)=>{
        return errors[name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            className: "p-error",
            children: errors[name].message
        }, void 0, false, {
            fileName: "[project]/src/app/(main)/banco/Banco.tsx",
            lineNumber: 229,
            columnNumber: 23
        }, this);
    };
    const onAgregarSubmit = (data)=>{
        //    event.preventDefault();
        let bancoCopy = Object.assign({}, data);
        //agregaBanco(bancoCopy);
        reset(defaultValues);
    };
    const dialogFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-d-flex p-jc-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
            label: "OK",
            className: "p-button-text",
            autoFocus: true,
            onClick: ()=>setShowMessage(false)
        }, void 0, false, {
            fileName: "[project]/src/app/(main)/banco/Banco.tsx",
            lineNumber: 243,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
        lineNumber: 242,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$toast$2f$toast$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                ref: toast
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-grid p-fluid",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " p-col-12 md:col-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-inputgroup",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputText"], {
                                placeholder: t("placeholder.criterio"),
                                tooltip: t("placeholder.criterio"),
                                tooltipOptions: {
                                    position: "bottom",
                                    mouseTrack: true,
                                    mouseTrackTop: 15
                                },
                                ref: criterioRef
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                tooltip: t("boton.agregar"),
                                tooltipOptions: {
                                    position: "bottom",
                                    mouseTrack: false,
                                    mouseTrackTop: 15
                                },
                                icon: "pi pi-plus-circle",
                                onClick: iniciaBanco
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$datatable$2f$datatable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                value: lstBanco,
                paginator: true,
                rows: 10,
                emptyMessage: t("rotulo.vacio"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$column$2f$column$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
                        field: "nombre",
                        header: t("banco:label.nombre"),
                        sortable: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$column$2f$column$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
                        body: actionTemplate,
                        header: t("rotulo.editar")
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$dialog$2f$dialog$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                header: headerBanco,
                visible: dlgBanco,
                modal: true,
                onHide: ()=>{
                    clearErrors();
                    setDlgBanco(false);
                },
                blockScroll: false,
                className: "p-fluid",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-d-flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-fluid p-grid",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                id: "banco-form",
                                className: "fluid formgrid grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field col-12 md:col-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Controller"], {
                                            name: "idBanco",
                                            control: control,
                                            rules: {
                                                required: t("banco:required.idBanco")
                                            },
                                            render: ({ field, fieldState })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: field.name,
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$utils$2f$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])({
                                                                "p-error": errors.value
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 25
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "p-float-label",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputText"], {
                                                                    id: field.name,
                                                                    value: field.value,
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$utils$2f$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])({
                                                                        "p-invalid": fieldState.invalid
                                                                    }),
                                                                    onKeyDown: (event)=>{
                                                                        if (event.key === "Enter") {
                                                                            event.preventDefault();
                                                                            trigger(field.name);
                                                                        }
                                                                    },
                                                                    onChange: (e)=>{
                                                                        field.onChange(e.target.value);
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                                                    lineNumber: 328,
                                                                    columnNumber: 27
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: field.name,
                                                                    children: t("banco:label.idBanco")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                                                    lineNumber: 344,
                                                                    columnNumber: 27
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 25
                                                        }, void 0),
                                                        getFormErrorMessage(field.name)
                                                    ]
                                                }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                        lineNumber: 312,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field col-12 md:col-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Controller"], {
                                            name: "nombre",
                                            control: control,
                                            rules: {
                                                required: t("banco:required.nombre")
                                            },
                                            render: ({ field, fieldState })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: field.name,
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$utils$2f$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])({
                                                                "p-error": errors.value
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 25
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "p-float-label",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputText"], {
                                                                    id: field.name,
                                                                    value: field.value,
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$utils$2f$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["classNames"])({
                                                                        "p-invalid": fieldState.invalid
                                                                    }),
                                                                    onKeyDown: (event)=>{
                                                                        if (event.key === "Enter") {
                                                                            event.preventDefault();
                                                                            trigger(field.name);
                                                                        }
                                                                    },
                                                                    onChange: (e)=>field.onChange(e.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 27
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "nombre",
                                                                    children: t("banco:label.nombre")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 27
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 25
                                                        }, void 0),
                                                        getFormErrorMessage(field.name)
                                                    ]
                                                }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                            lineNumber: 355,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                        lineNumber: 354,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field  col-12 ",
                                        children: dlgFooter
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                        lineNumber: 389,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                lineNumber: 310,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                            lineNumber: 309,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                    lineNumber: 307,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$dialog$2f$dialog$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                showHeader: false,
                visible: showMessage,
                modal: true,
                onHide: ()=>setShowMessage(false),
                position: "top",
                footer: dialogFooter,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "m-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "pi pi-check-circle",
                            style: {
                                fontSize: "5rem",
                                color: "var(--green-500)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            children: "Registro satisfactorio"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                            lineNumber: 411,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "banco registrado correctamente ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Valor"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                                    lineNumber: 413,
                                    columnNumber: 44
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                            lineNumber: 412,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/banco/Banco.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/banco/Banco.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Banco;
}}),
"[project]/src/app/(main)/banco/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$banco$2f$BancoContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(main)/banco/BancoContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$banco$2f$Banco$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(main)/banco/Banco.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const Index = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$banco$2f$BancoContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BancoProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$banco$2f$Banco$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/(main)/banco/page.tsx",
                lineNumber: 11,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(main)/banco/page.tsx",
            lineNumber: 11,
            columnNumber: 3
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = Index;
}}),
"[project]/src/app/(main)/banco/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_app_%28main%29_banco_1a4a44._.js.map