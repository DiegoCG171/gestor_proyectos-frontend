import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startProjectQADelete,
  startProjectsCreated,
} from "../actions/projectsQA";
import { useForm } from "../hooks/useForm";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import "moment/locale/es";

moment.locale("es");

const now = moment();
const nowDayPlus = moment().add(1, "day");

export const ProjectsQAPage = () => {
  const dispatch = useDispatch();
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [startDate, setStartDate] = useState(now.toDate());
  const [endDate, setEndDate] = useState(nowDayPlus.toDate());
  const [values, handleInputChange, setValues, reset] = useForm({
    code: "",
    name: "",
    platform: "",
    responsable: "",
    dateStart: now.toDate(),
    dateEnd: nowDayPlus.toDate(),
    hours: 0,
    status: "",
    observations: "",
    oc: "",
    additionalHours: "",
    pe: "",
  });

  const {
    code,
    name,
    platform,
    responsable,
    hours,
    status,
    observations,
    oc,
    additionalHours,
    pe,
  } = values;

  const handleCreate = (e) => {
    e.preventDefault();
    reset();
    dispatch(startProjectsCreated(values));
    setOpenModalCreate(false);
  };

  const { projects } = useSelector((state) => state.projectsQA);

  const handleDelete = (id) => {
    dispatch(startProjectQADelete(id));
  };

  const handleStartDAteChange = (e) => {
    setStartDate(e);
    setValues({
      ...values,
      dateStart: e,
    });
  };

  const handleEndDAteChange = (e) => {
    setEndDate(e);
    setValues({
      ...values,
      dateEnd: e,
    });
  };

  return (
    <div className="crud">
      <div className="crud-nav">
        <h2 className="crud-title">Projectos QA</h2>
        <button
          className="crud-button"
          onClick={() => setOpenModalCreate(true)}
        >
          Agregar Nuevo Projecto
        </button>
      </div>
      {projects.map((project) => {
        return (
          <div key={project._id} className="crud-item">
            <div className="crud-item__info-project">
              <p className="crud-item__code-project">{`${project.code}`}</p>
              <p className="crud-item__code-project">{project.name}</p>
              <p className="crud-item__project-text">
                {`Plataforma:   ${project.platform}`}
              </p>
              <p className="crud-item__project-text">
                {`Estatus:   ${project.status}`}
              </p>
              <p className="crud-item__project-text">
                {`Observaciones:   ${project.observations}`}
              </p>
              <p className="crud-item__project-text">{`OC:   ${project.oc}`}</p>
              <p className="crud-item__project-text">
                {`Horas Adicionales:   ${project.additionalHours}`}
              </p>
              <p className="crud-item__project-text">{`P.E. :   ${project.pe}`}</p>
              <p className="crud-item__project-text">{`Fecha de inicio:   ${moment(
                project.dateStart
              ).format("LL")}`}</p>
              <p className="crud-item__project-text">{`Fecha final:   ${moment(
                project.dateEnd
              ).format("LL")}`}</p>
            </div>
            <div className="crud-admin">
              {/* <button className="crud-update-button">Actualizar</button> */}
              <button
                className="crud-delete-button"
                onClick={() => handleDelete(project._id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        );
      })}
      {openModalCreate && (
        <div className="modal">
          <h2 className="modal-title">Crear un nuevo proyecto</h2>
          <form
            className="crud-modal-form"
            onSubmit={handleCreate}
            autoComplete="off"
          >
            <div className="crud-modal__wrapper">
              <div className="crud-modal__info">
                <label className="crud-modal__label">Clave del proyecto:</label>
                <input
                  type="text"
                  name="code"
                  className="crud-modal__input"
                  onChange={handleInputChange}
                  value={code}
                  required
                />
              </div>
              <div className="crud-modal__info">
                <label className="crud-modal__label">
                  Nombre del proyecto:
                </label>
                <input
                  type="text"
                  name="name"
                  className="crud-modal__input"
                  onChange={handleInputChange}
                  value={name}
                  required
                />
              </div>
            </div>
            <div className="crud-modal__wrapper">
              <div className="crud-modal__info">
                <label className="crud-modal__label">Plataforma:</label>
                <input
                  type="text"
                  name="platform"
                  className="crud-modal__input"
                  onChange={handleInputChange}
                  value={platform}
                  required
                />
              </div>
              <div className="crud-modal__info">
                <label className="crud-modal__label">
                  Responsable del proyecto:
                </label>
                <input
                  type="text"
                  name="responsable"
                  className="crud-modal__input"
                  onChange={handleInputChange}
                  value={responsable}
                  required
                />
              </div>
            </div>
            <div className="crud-modal__wrapper">
              <div className="crud-modal__info">
                <label className="crud-modal__label">Fecha de inicio:</label>
                <DateTimePicker
                  onChange={handleStartDAteChange}
                  value={startDate}
                  format="dd-MM-yyyy"
                  className="crud-modal__input"
                />
              </div>
              <div className="crud-modal__info">
                <label className="crud-modal__label">Fecha de final:</label>
                <DateTimePicker
                  onChange={handleEndDAteChange}
                  value={endDate}
                  minDate={startDate}
                  format="dd-MM-yyyy"
                  className="crud-modal__input"
                />
              </div>
              <div className="crud-modal__info" id="modal_hours">
                <label className="crud-modal__label">Horas:</label>
                <input
                  type="number"
                  name="hours"
                  className="crud-modal__input"
                  onChange={handleInputChange}
                  value={hours}
                  id="modal_hours__input"
                  required
                />
              </div>
            </div>
            <div className="crud-modal__wrapper">
              <div className="crud-modal__info">
                <label className="crud-modal__label">Estatus:</label>
                <input
                  type="text"
                  name="status"
                  className="crud-modal__input"
                  onChange={handleInputChange}
                  value={status}
                  required
                />
              </div>
              <div className="crud-modal__info">
                <label className="crud-modal__label">Horas Adicionales:</label>
                <input
                  type="text"
                  name="additionalHours"
                  className="crud-modal__input"
                  onChange={handleInputChange}
                  value={additionalHours}
                  required
                />
              </div>
            </div>
            <label className="crud-modal__label">Observaciones:</label>
            <textarea
              type="text-area"
              name="observations"
              className="crud-modal__input"
              onChange={handleInputChange}
              value={observations}
              required
            />
            <div className="crud-modal__wrapper">
              <div className="crud-modal__info">
                <label className="crud-modal__label">OC:</label>
                <input
                  type="text"
                  name="oc"
                  className="crud-modal__input"
                  onChange={handleInputChange}
                  value={oc}
                  required
                />
              </div>
              <div className="crud-modal__info">
                <label className="crud-modal__label">P.E. :</label>
                <input
                  type="text"
                  name="pe"
                  className="crud-modal__input"
                  onChange={handleInputChange}
                  value={pe}
                />
              </div>
            </div>
            <div className="crud-modal-buttons">
              <button className="crud-modal__button-accept" type="submit">
                Aceptar
              </button>
              <button
                className="crud-modal__button-cancel"
                onClick={() => setOpenModalCreate(false)}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
