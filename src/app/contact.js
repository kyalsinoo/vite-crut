import { createContactForm } from "../core/selector"
import { baseUrl } from "../core/variable"

export const contactCreateFormHandler=async (event)=>{
    event.preventDefault()

    // start sending data
    createContactForm.querySelector("[name='name']").disabled=true;
    createContactForm.querySelector("[name='number']").disabled=true;
    createContactForm.querySelector("button").disabled=true;
    createContactForm.querySelector("button").innerText="loading.."

    const formData =new FormData(createContactForm)
    // console.log(formData.get("name"));
    // console.log(formData.get("number"));
    // data send - post
//uf u want to post{u} u will need header,method
    const myHeaders =new Headers();
    myHeaders.append("Content-Type", "application/json");

    const  raw = JSON.stringify({
        name: formData.get("name"),
        Number: formData.get("number")
      });

      const requestOptions={
        method:"POST",
        headers:myHeaders,
        body:raw
      }
    // only if u want to get data u will need await fetch
    const res= await fetch(`${baseUrl}/contact`,requestOptions);
    const data=await res.json();
    createContactForm.querySelector("[name='name']").disabled=false;
    createContactForm.querySelector("[name='number']").disabled=false;
    createContactForm.querySelector("button").disabled=false
    
    createContactForm.reset()
}