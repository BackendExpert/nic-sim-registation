import React from 'react'
import Error from './Error'

const Err404 = () => {
    return (
        <div>
            <Error 
                errorcode={404}
                errortitle={"Page Not found"}
                errordesc={"this page is temporarily unavailable"}
            />
        </div>
    )
}

export default Err404