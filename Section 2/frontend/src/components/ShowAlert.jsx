import React, { useEffect } from 'react'
import Swal from 'sweetalert2';

const ShowAlert = ({ errorMsg, successMag, setErrormsg, setSuccessMsg }) => {

    useEffect(() => {
        if (errorMsg || successMag) {
            Swal.fire({
                title: successMag ? "Success" : 'Error!',
                text: successMag ? successMag : errorMsg,
                icon: successMag ? "success" : 'warning',
                confirmButtonText: 'Ok'
            })
        }
        setErrormsg("")
        setSuccessMsg("")
        // if (successMag) {
        //     Swal.fire({
        //         title: "Success",
        //         text: "Sign Up successfull",
        //         icon: "success",
        //         confirmButtonText: "Ok"
        //     })
        // }

    }, [errorMsg, successMag])
    return (
        <>
        </>
    )

}
export default ShowAlert;