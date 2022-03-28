import Avatar from './avatar';



import Button from './button';


const Item = (props) => {

    return (

        <li className="" >
            <div className="select-none cursor-pointer flex flex-col md:flex-row lg:flex-row sm:flex-row items-center p-4 ">
                <Avatar />
                <div className="pl-1 pr-1 text-center sm:text-left md:text-left lg:text-left w-7/12">
                    <div className="font-semibold dark:text-white ">
                        <h3 className="text-lg">{props.title}</h3>
                    </div>
                    <div className="text-gray-600 dark:text-gray-200 text-sm ">
                        Producer: {props.producer}
                    </div>
                    <div className="text-gray-600 dark:text-gray-200 text-sm text-regal-orange ">
                        Director: {props.director}
                    </div>
                </div>
                <Button link={props.link} title={props.title} description={props.description} />
            </div>
        </li>
    )
}

export default Item;