import React, { useState } from "react";
import { toast } from "react-toastify";
// import { Button } from "@/components/ui/button.jsx"

//emotions
//speeed
const Layout = () => {
    const [data, setData] = useState("")
    
    const handleSubmit=(e)=>{
        e.preventDefault()
       if(data=="") {
             toast.error('Enter the text first!', {
      position: 'top-center',
            });
        throw new Error("enter the data")
   
       }
        // console.log(typeof(data))
        // console.log("form is working")
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(data);
        synth.speak(utterance);
        console.log("audio api is working")
              toast.success("audio worked",{position:"top-center"})
        setData("")
    }
  return (
   <main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] text-white px-4 md:px-24 py-16">
      <p className="text-xl text-gradient-to-b from-red-200 to-red font-semibold ">
        Text to audio Converter
      </p>
      <form onSubmit={(e)=>handleSubmit(e)} className="w-full flex flex-col sm:flex-row sm:items-end gap-4 ">
       <div className="sm:w-2/3 mt-2 gap-2 flex flex-col">
         <label
         className="text-lg"
          htmlFor="data">Enter the Text</label>
        <textarea  
        value={data}
        onChange={(e)=>setData(e.target.value)}
        className=" border-2  p-2 rounded-xl"
         cols={10} rows={10} 
         placeholder="Hi tell me the text u want to convert "
         name="data" id="data">

         </textarea>
       </div>
        <button
        type="submit"
         className="p-2 w-24 h-10 rounded-md bg-blue-400 border text-white">
            Submit
        </button>
</form>
      <p>
      I have added the input box button and other its the ui that has been done
      </p>
    </main>
  );
};

export default Layout;
