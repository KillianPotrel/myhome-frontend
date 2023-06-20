import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingList, useArchiveCurrentList, useDeleteShoppingArchived, useDuplicateArticleInCurrent, useManyListArchived, useOneListCurrent } from '../api/ShoppingList';
import { errorToast, successToast } from '../services/toastify.service';

const ShoppingLists = () => {
    let navigate = useNavigate();

    const { data : dataShoppingCurrent } = useOneListCurrent()
    const shoppingCurrent : ShoppingList = dataShoppingCurrent?.data

    const { data : dataShoppingArchived } = useManyListArchived()
    const shoppingArchived : ShoppingList[] = dataShoppingArchived?.data

    const archiveCurrentList = useArchiveCurrentList()
    const deleteArchivedList = useDeleteShoppingArchived()
    const duplicateArchivedList = useDuplicateArticleInCurrent()
    

    const handleArchived = () => {
        archiveCurrentList.mutate();
    }
    
    const handleDuplicate = (list_id : number) => {
        duplicateArchivedList.mutate(list_id)
        successToast("Articles ajoutés dans la liste actuelle");
    }

    const handleDelete = (list_id : number) => {
        deleteArchivedList.mutate(list_id)
    }

    return (
        <div className="mx-auto mt-5 max-w-7xl sm:px-6 lg:px-8">
            <h3>Liste courante</h3>
            <div
                className="relative flex items-center justify-between space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-amber-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
                <div className="min-w-0 flex-1">
                    <a href=""
                        onClick={() => navigate(`/family/shopping/${shoppingCurrent.id}`)} 
                        className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">Liste actuelle</p>
                    <p className="truncate text-sm text-gray-500">{shoppingCurrent?.nb_articles > 0 ? shoppingCurrent?.nb_articles + " articles" : "Pas d'articles dans la liste"}</p>
                    </a>
                </div>
                <div className="min-w-0 flex-1 flex justify-end z-10">
                    <button 
                        type='button'
                        onClick={handleArchived}
                        className="rounded-md bg-amber-600 mx-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                        >
                            Archiver
                    </button>
                </div>
            </div>
            <h3 className='mt-7'>Liste archivées</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {shoppingArchived?.length > 0 
                ?
                    shoppingArchived.map((listArchived) => (
                        <div
                            key={listArchived.id}
                            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-amber-500 focus-within:ring-offset-2 hover:border-gray-400"
                        >
                            <div className="min-w-0 flex-1">
                                <a href="" 
                                    onClick={() => navigate(`/family/shopping/${listArchived.id}`)}
                                    className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    <p className="text-sm font-medium text-gray-900">Archivée le {listArchived.archived_at}</p>
                                    <p className="truncate text-sm text-gray-500">{listArchived?.nb_articles > 0 ? listArchived?.nb_articles + " articles" : "Pas d'articles dans la liste"}</p>
                                </a>
                            </div>
                            <div className="min-w-0 flex-1 flex justify-end z-10">
                                <button 
                                    type='button'
                                    onClick={() => handleDuplicate(listArchived.id)}
                                    className="rounded-md bg-amber-600 mx-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                                    >
                                        Dupliquer
                                </button>
                                <button 
                                    type='button'
                                    onClick={() => handleDelete(listArchived.id)}
                                    className="rounded-md bg-red-600 mx-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                    >
                                        Supprimer
                                </button>
                            </div>
                        </div>
                    ))
                : 
                    <p className="text-m text-gray-500">Pas d'articles dans la liste</p>
                    }
            
            </div>
        </div>
    );
};

export default ShoppingLists;