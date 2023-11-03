import { contactCreateFormHandler } from "./app/contact";
import { createContactForm } from "./core/selector";

class App{
    listener(){
        createContactForm.addEventListener("submit",contactCreateFormHandler)
    }
    init(){
        console.log("App is starting")
        this.listener();
    }
}
export default App;