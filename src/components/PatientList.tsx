import { usePatientStore } from "../store"


export default function PatientList() {

  const patients = usePatientStore((state) => state.patient)


  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
        <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Administra los{' '}

          <span className="text-indigo-600 font-bold">Pacientes y citas</span>

        </p>
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
