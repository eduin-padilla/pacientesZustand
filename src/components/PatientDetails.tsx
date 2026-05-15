import type { Patient } from "../type"
import PatientDetailsItem from "./PatientDetailsItem"
import { usePatientStore } from "../store"
import { toast } from "react-toastify"

type PatientDeatilsProps = {
  patient: Patient
}

export default function PatientDetails({patient}: PatientDeatilsProps) {

  const deletePatient = usePatientStore(state => state.deletePatient)
  const getPatientById = usePatientStore(state => state.getPatientById)

  const handleClick = () => {
    deletePatient(patient.id)
    toast.error('Paciente elminado correctamente')
  }

  return (

    <div className="mx-5 py-10 my-10 px-5 bg-white shadow-md rounded-xl">

      <PatientDetailsItem label="id" data={patient.id}/>
      <PatientDetailsItem label="nombre" data={patient.name}/>
      <PatientDetailsItem label="Propietario" data={patient.caretaker}/>
      <PatientDetailsItem label="email" data={patient.email}/>
      <PatientDetailsItem label="Fecha" data={patient.date}/>
      <PatientDetailsItem label="Sintomas" data={patient.symptoms}/>

      <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
        <button
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>
        <button 
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white 
        font-bold uppercase rounded-lg"
        onClick={handleClick}
        >
          Eliminar
        </button>

      </div>
    </div>
    
  )
}

