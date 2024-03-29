import React, { useState, useEffect } from 'react';
import { ExitRequest, usePostExitRequest } from '../../api/ExitRequest';
import { errorToast, successToast } from '../../services/toastify.service';

const ProfileExitRequest = ():JSX.Element => {
    const [exitRequest, setExitRequest] = useState<ExitRequest>({
        date_debut: new Date(),
        date_fin: new Date(),
        motif: ""
    })
    
    
    const postExistRequest = usePostExitRequest()
    const handleChange = (e : any) => {
        if(e.target.name === "date_debut" || e.target.name === "date_fin"){
            setExitRequest({
                ...exitRequest,
                    [e.target.name]: new Date(e.target.value),
                });
        } else {
            setExitRequest({
            ...exitRequest,
                [e.target.name]: e.target.value,
            });
        }
    }

    const handleSubmit = () => {
        if(exitRequest.date_debut === exitRequest.date_fin || exitRequest.date_debut > exitRequest.date_fin){
            errorToast("Erreur dans les dates saisies");
            return
        }
        if(exitRequest.motif.length === 0){
            errorToast("Renseigner une raison");
            return
        }
        postExistRequest.mutate(exitRequest)
    }

    useEffect(() => {
        if (postExistRequest.isSuccess) {
          setExitRequest({
            date_debut: new Date(),
            date_fin: new Date(),
            motif: ""})
        } 
      }, [postExistRequest]);

    return (              
        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
            <h2 className="text-base font-semibold leading-7 text-black">Demande de sortie</h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
                Demandez la permission pour sortir, bien sûr il faut avoir une raison valable ...!
            </p>
            </div>
            <form className="md:col-span-2">
            <div className="px-4 py-6 sm:p-8">
                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2">
                    <label htmlFor="exit_time" className="block text-sm font-medium leading-6 text-gray-900">
                    Début
                    </label>
                    <div className="mt-2">
                    <div className="flex rounded-md bg-black/5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-600 sm:max-w-md">
                        <input
                        type="datetime-local"
                        name="date_debut"
                        onChange={handleChange}
                        id="date_debut"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="return_time" className="block text-sm font-medium leading-6 text-gray-900">
                    Fin
                    </label>
                    <div className="mt-2">
                    <div className="flex rounded-md bg-black/5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-600 sm:max-w-md">
                        <input
                        type="datetime-local"
                        name="date_fin"
                        onChange={handleChange}
                        id="date_fin"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    Raison de la sortie
                    </label>
                    <div className="mt-2">
                    <textarea
                        id="motif"
                        name="motif"
                        onChange={handleChange}
                        rows={3}
                        className="block w-full bg-black/5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                    />
                    </div>
                </div>
            </div>
          </div>
          <div className="flex items-center gap-x-6 px-4 py-4 sm:px-8">
            
            <button 
                type='button'
                onClick={handleSubmit}
                className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                >
                    Demander
            </button>
          </div>
        </form>
    </div>
    );
};

export default ProfileExitRequest;