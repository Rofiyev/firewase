import React,{useEffect} from 'react'




function api() {

    useEffect(()=>{
        fetch('gstuz.pythonanywhere.com/',{
            method:"GET"
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    })

  return (
    <div>

    </div>
  )
}

export default api