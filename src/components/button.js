import { useState } from 'react';
import Modal from "./modal";




function Button(props) {
    const [showModal, setShowModal] = useState(false);

    const closeModalHandler = () => {
        setShowModal(false);
    }

    return (
        <div className="items-right justify-center sm:justify-end md:justify-end lg:justify-end  flex w-6/12 sm:w-3/12 md:w-3/12 lg:w-3/12 mt-3 sm:mt-0 md:mt-0 lg:mt-0">
            <div className="text-gray-600 dark:text-gray-200 text-xs items-right" onClick={() => setShowModal(true)}>
                <div type="button" className="py-1 px-2  inline-flex bg-regal-orange items-right hover:bg-regal-orange-2 focus:ring-regal-orange-1 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg> Rendez-vous
                </div>
            </div>
            {showModal && <Modal onCloseModal={closeModalHandler} title={props.title} description={props.description} />}
        </div>
    )
}

export default Button;