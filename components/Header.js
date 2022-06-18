import config from '../config'

const Header = () => (
    <h1 className="flex justify-start items-center rounded-b-sm border-b-4 border-white h-14 bg-sky-400">
        <span className='mx-4 text-white text-xl font-bold'> 
            {config.headerText} 
        </span>
    </h1>
)

export default Header;