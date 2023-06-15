import { Alert, AlertTitle } from "@mui/material"
import { useState } from "react";

function Error({message}) {
    const [isAlert, setisAlert] = useState(true);
  return (
        <>
          {isAlert?
            <Alert severity="error" onClose={() => {setisAlert(false)}}>
                <AlertTitle>Error</AlertTitle>
                <p>{message}</p>
                <p>Please Try Again</p>
            </Alert>:
            false}
        </>
  )
}

export default Error