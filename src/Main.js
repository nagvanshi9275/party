


import React from "react";

import {TextField} from "@mui/material"


import Button from '@mui/material/Button';

export default function Main(){


     return(
       <>

       <div className="Baap">


           <div className="input">

<TextField
                variant="outlined"
                required
                
                id="password"
                label="email"
                type="email"
                name="password"
              />

      </div>




       
      <div  className="input">

<TextField
                variant="outlined"
                required
                
                id="password"
                label="Password"
                type="password"
                name="password"
              />

      </div>






           
      <div className="input">

      <Button variant="contained" color="primary" >
      Login
    </Button>

      </div>

         








       </div>


      </>


     )



}








