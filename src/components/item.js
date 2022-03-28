import Avatar from './avatar';



import Button from './button';


const Item = (props) => {

    return (

        <li className="flex flex-row" >
            <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                <Avatar />
                <div className="flex-1 pl-1 mr-16 text-left">
                    <div className="font-semibold dark:text-white ">
                        <h3 className="text-lg">{props.title}</h3>
                    </div>
                    <div className="text-gray-600 dark:text-gray-200 text-sm">
                        Producer: {props.producer}
                    </div>
                    <div className="text-gray-600 dark:text-gray-200 text-sm text-regal-orange">
                        Director: {props.director}
                    </div>
                </div>
                <Button link={props.link} title={props.title} description={props.description} />
            </div>
        </li>
    )
}

export default Item;
