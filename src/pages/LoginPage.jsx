import { Button, Card, CardBody, Input } from "@nextui-org/react"
import { useState } from "react"
import { EyeFilledIcon } from "../componenti/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../componenti/icons/EyeSlashFilledIcon";


const LoginPage = () => {

  const[showPassword,setShowPassword ] = useState(false);


  return (
   <Card className=" w-full max-w-xl">
    <CardBody className=" gap-4 p-8">
      <h1 className=" text-4xl font-bold">Login</h1>
      <Input name="Email" label= "Email" />
      <Input 
      name="Password" 
      label= "Password" 
      type={showPassword ? 'text' : 'Password'}
      endContent= {<button className=" self-center" onClick={() => setShowPassword(! showPassword) } >
        {showPassword ? <EyeFilledIcon className = 'w-6 h-6' /> : <EyeSlashFilledIcon  className = 'w-6 h-6'/>}
      </button>} 
      />
      <Button color="primary">Accedi</Button>
    </CardBody>
   </Card>
  )
}

export default LoginPage