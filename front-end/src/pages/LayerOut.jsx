import { Outlet } from "react-router-dom";
import NavBar from "./navbar";

export default function  LayerOut() {
 
  return (
    <>
    <NavBar/>
    <Outlet/>
     
    </>
  )
}