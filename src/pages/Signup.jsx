import Header from '../components/forms/Header'
import Signup from '../components/forms/Signup'

export default function SignupPage(){
  return(
      <div className=" flex flex-col md:w-2/3 m-auto" >
        <Header
          heading="Registrate para crear una cuenta"
          paragraph="¿Ya tienes cuenta? "
          linkName="Login"
          linkUrl="/login"
        />
        <Signup/>
      </div>
  )
}