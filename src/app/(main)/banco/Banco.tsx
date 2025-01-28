import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  FormEvent,
} from "react";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText, InputTextProps } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Toolbar } from "primereact/toolbar";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
//import "moment-timezone";
import { classNames } from "primereact/utils";
//import BancoService from "@/service/BancoService";
import { BancoContext } from "./BancoContext";
import { useTranslation } from "react-i18next";
import { useForm, Controller, FieldErrors } from "react-hook-form";
import { Interfaces } from "@/types";

const Banco = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [lstBanco, setLstBanco] = useState<Interfaces.IBanco[]>([]);
  const [dlgBanco, setDlgBanco] = useState(false);
  const { banco, setBanco } = useContext(BancoContext);
  const { t } = useTranslation(["translation", "banco"]);
  //const bancoService = new BancoService();
  const criterioRef = useRef<HTMLInputElement>(null);


  const toast = useRef<Toast>(null);

  const defaultValues = {
    idBanco: "",
    nombre: "",
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
  }; */

  const headerBanco = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      {banco.idBanco
        ? t("banco:rotulo.actualizar")
        : t("banco:rotulo.agregar").concat(" ") + banco.nombre}
    </div>
  );

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
  }; */

  /* const actualizaBanco = (pBanco: Interfaces.IBanco) => {
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
 */
  const iniciaBanco = () => {
    setBanco(defaultValues);
    setDlgBanco(true);
  };


  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
    trigger,
  } = useForm<Interfaces.IBanco>({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    reset(banco);
  }, [banco]);



  const actionTemplate = (rowData: Interfaces.IBanco) => {
    return (
      <>
        <Button
          type="button"
          icon="pi pi-pencil"
          className="p-button-rounded"
          onClick={() => {
            //seleccionaBanco(rowData);
          }}
        ></Button>
      </>
    );
  };

  const rightFooter = (
    <div className="p-grid p-fluid">
      <div className="p-col-12">
        <div className="p-inputgroup">
          {banco.idBanco && (
            <Button
              tooltip={t("boton.actualizar")}
              tooltipOptions={{
                position: "bottom",
                mouseTrack: false,
                mouseTrackTop: 15,
              }}
              icon="pi pi-undo"
              className="p-button-rounded"
              form="banco-form"
              onClick={handleSubmit((data) =>
                onAgregarSubmit(data)
              )}
            ></Button>
          )}
          {!banco.idBanco && (
            <Button
              tooltip={t("boton.agregar")}
              tooltipOptions={{
                position: "bottom",
                mouseTrack: false,
                mouseTrackTop: 15,
              }}
              icon="pi pi-check"
              className="p-button-rounded"
              form="banco-form"
              onClick={handleSubmit((data) =>
                onAgregarSubmit(data)
              )}
            ></Button>
          )}
        </div>
      </div>
    </div>
  );

  const rightFooterCancelar = (
    <div className="p-grid p-fluid">
      <div className="p-col-12">
        <div className="p-inputgroup">
          <Button
            tooltip={t("boton.cancelar")}
            tooltipOptions={{
              position: "bottom",
              mouseTrack: false,
              mouseTrackTop: 15,
            }}
            icon="pi pi-ban"
            className="p-button-rounded"
            onClick={(event) => {
              event.preventDefault();
              setDlgBanco(false);
            }}
          ></Button>
        </div>
      </div>
    </div>
  );

  const dlgFooter = (
    <Toolbar end={rightFooter} start={rightFooterCancelar}></Toolbar>
  );

  const getFormErrorMessage = (name: string) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
  };

  const onAgregarSubmit = (data: Interfaces.IBanco) => {
//    event.preventDefault();
    let bancoCopy = Object.assign({}, data);
    //agregaBanco(bancoCopy);
    reset(defaultValues);
  };


  const dialogFooter = (
    <div className="p-d-flex p-jc-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  return (
    <div>
      <Toast ref={toast} />
      <div className="p-grid p-fluid">
        <div className=" p-col-12 md:col-12">
          <div className="p-inputgroup">
            <InputText
              placeholder={t("placeholder.criterio")}
              tooltip={t("placeholder.criterio")}
              tooltipOptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              ref={criterioRef}
              //onKeyDown={(e) => obtenerBanco(e)}
            ></InputText>
            <Button
              tooltip={t("boton.agregar")}
              tooltipOptions={{
                position: "bottom",
                mouseTrack: false,
                mouseTrackTop: 15,
              }}
              icon="pi pi-plus-circle"
              onClick={iniciaBanco}
            ></Button>
          </div>
        </div>
      </div>
      <DataTable
        value={lstBanco}
        paginator={true}
        rows={10}
        emptyMessage={t("rotulo.vacio")}
      >
        <Column
          field="nombre"
          header={t("banco:label.nombre")}
          sortable={true}
        ></Column>
        <Column body={actionTemplate} header={t("rotulo.editar")}></Column>
      </DataTable>
      <Dialog
        header={headerBanco}
        visible={dlgBanco}
        modal={true}
        onHide={() => {
          clearErrors();
          setDlgBanco(false);
        }}
        blockScroll={false}
        className="p-fluid"
      >
        {/* {banco && */}
        <div className="p-d-flex">
          <div className="card">
            <div className="p-fluid p-grid">
              <form id="banco-form" className="fluid formgrid grid">
                {/* IDBANCO */}
                <div className="field col-12 md:col-6">
                  <Controller
                    name="idBanco"
                    control={control}
                    rules={{
                      required: t("banco:required.idBanco"),
                    }}
                    render={({ field, fieldState }) => (
                      <>
                        <label
                          htmlFor={field.name}
                          className={classNames({
                            "p-error": errors.value,
                          })}
                        ></label>
                        <span className="p-float-label">
                          <InputText
                            id={field.name}
                            value={field.value}
                            className={classNames({
                              "p-invalid": fieldState.invalid,
                            })}
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                event.preventDefault();
                                trigger(field.name);
                              }
                            }}
                            onChange={(e) => {
                              field.onChange(e.target.value);
                            }}
                          />
                          <label htmlFor={field.name}>
                            {t("banco:label.idBanco")}
                          </label>
                        </span>
                        {getFormErrorMessage(field.name)}
                      </>
                    )}
                  ></Controller>
                </div>

                <div className="field col-12 md:col-6">
                  <Controller
                    name="nombre"
                    control={control}
                    rules={{ required: t("banco:required.nombre") }}
                    render={({ field, fieldState }) => (
                      <>
                        <label
                          htmlFor={field.name}
                          className={classNames({ "p-error": errors.value })}
                        ></label>
                        <span className="p-float-label">
                          <InputText
                            id={field.name}
                            value={field.value}
                            className={classNames({
                              "p-invalid": fieldState.invalid,
                            })}
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                event.preventDefault();
                                trigger(field.name);
                              }
                            }}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                          <label htmlFor="nombre">
                            {t("banco:label.nombre")}
                          </label>
                        </span>
                        {getFormErrorMessage(field.name)}
                      </>
                    )}
                  ></Controller>
                </div>
                <div className="field  col-12 ">{dlgFooter}</div>
              </form>
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        showHeader={false}
        visible={showMessage}
        modal={true}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
      >
        <div className="m-0">
          <i
            className="pi pi-check-circle"
            style={{
              fontSize: "5rem",
              color: "var(--green-500)",
            }}
          />
          <h5>Registro satisfactorio</h5>
          <p>
            banco registrado correctamente <b>Valor</b>
          </p>
        </div>
      </Dialog>
    </div>
  );
};
export default Banco;
