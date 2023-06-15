import { Alert, AlertTitle } from "@mui/material"
import { useState } from "react"

function Success({message}) {
  const [isAlert, setisAlert] = useState(true);
  
  return (
        <>
        {isAlert?
            <Alert severity="success" onClose={() =>{setisAlert(false)}}>
                <AlertTitle>Success</AlertTitle>
                {message}
            </Alert>
        :false}
        </>
  )
}

export default Success