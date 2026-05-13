import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"



export default function PatientList() {

  const patients = usePatientStore(state => state.patients)

  console.log(patients)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra los{' '}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
          {patients.map((patient) => (
            <PatientDetails 
              key={patient.id}
              patient={patient}
            />

          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Agrega Pacientes {''}

            <span className="text-indigo-600 font-bold">Para que aparezcan aqui</span>
          </p>
        </>
      )}
    </div>
  )
}
