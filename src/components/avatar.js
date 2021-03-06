import avatar from '../avatar.webp';


function Avatar(props) {
    return (

        <div className="flex flex-col w-20 h-20 justify-center items-center mr-3 w-6/12 sm:w-2/12 md:w-2/12 lg:w-2/12">
            <button className="block relative">
                <img alt="profil" src={avatar} className="mx-auto object-cover rounded-full h-20 w-20 " />
                <span
                    className="absolute right-0  w-8 h-8 bg-regal-orange items-center border-2 border-white rounded-full color-white top-0 text-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </span>
            </button>
        </div>
    )
}

export default Avatar;
