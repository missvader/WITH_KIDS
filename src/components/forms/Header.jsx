import {Link} from 'react-router-dom';
import Logo from '../../assets/withKidsLogo.png'
export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
  return(
    <div className="m-10">
    <div className="flex justify-center">
        <img 
            alt="logo"
            className="h-28 w-40 md:h-28 md:w-40 lg:h-40 lg:w-60"
            src={Logo}
        />
    </div>
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
    </h2>
    <p className="mt-2 text-center text-sm text-gray-600 mt-5">
    {paragraph} {' '}
    <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
        {linkName}
    </Link>
    </p>
</div>
  )
}