import Header from "../components/forms/Header"
import Login from "../components/forms/Login"
export default function LoginPage(){
  return(
      <div className="flex flex-col md:w-2/3 m-auto">
         <Header
            heading="Accede a tu cuenta"
            paragraph="¿Aún no estás registrad@? "
            linkName="Signup"
            linkUrl="/signup"
          /> 
         <Login/> 
      </div>
  )
}