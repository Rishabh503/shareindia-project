import { useState } from "react";



export const getData=async()=>{
const [setting, setSetting] = useState([])

  const res=await fetch("http://localhost:3000/inputs/allInputs")
  const data=res.json()
  console.log(data)
}

export const SETTINGS = {
  speed: [1, 2, 3, 4],
  language: {
    hi: "Hindi",
    en: "English",
    es: "Español"
  },
  speaker: {
    srk: "Shahruk Khan",
    varun: "Varun"
  },
  mood: {
    normal: "Normal",
    angry: "Angry"
  }
};
