import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { motion } from "framer-motion";
import { Link, Route, Routes } from "react-router-dom";
import { Projects, SignUp } from "../container"

const Home = () => {
  const [isSideMenu, setisSideMenu] = useState(false)
  const [user, setuser] = useState(null);

  return (<>
    <div className={`w-2 ${isSideMenu ? "w-2" : "flex-[.2] xl:flex-[.2]"}
    min-h-screen max-h-screen bg-secondary relative px-3 py-4 flex flex-col items-center
    justify-start gap-4`}
    >
      {/* anchor*/}
      <motion.div
        whileTap={{ scale: 0.8 }}
        onClick={() => { setisSideMenu(!isSideMenu) }}
        className="bg-secondary w-8 h-7 rounded-tr-md rounded-br-md absolute
        -right-6 flex items-center justify-center cursor-pointer py-2">
        {isSideMenu ? <GoArrowRight className="text-white" /> : <GoArrowLeft className="text-white" />}
      </motion.div>


      {/* logo */}
      <div className={"overflow-hidden w-full flex flex-col gap-4"}>
        <Link to={'/home'}>
          <b><div className={`text-white text-3xl lg:text-3xl lg:ml-10 `}>CODE IT</div></b>
        </Link>


        {/* start coding */}
        <Link to={"/newProject"}>
          <div className={`px-3 py-3 flex items-center justify-center rounded-xl border border-gray-500 cursor-pointer 
        group hover:border-gray-200 `}>
            <p className="text-gray-500 text-xs hover:text-gray-200 capitalize">Start Coding</p>
          </div>
        </Link >


        {/* Home nav*/}
        {user && (
          <Link to={"/home/projects"} className="flex items-center justify-center gap-4">
            <GoHome className="text-primaryText text-xl" />
            <p className="text-xs text-primaryText">Home</p>
          </Link>
        )}

      </div>
    </div >

    <div className="flex-1 min-h-screen max-h-screen overflow-y-scroll h-full flex flex-col items-start justify-start
    px-4 md:px-12 py-4 md:py-12 ">

      {/*top section*/}
      <div className="w-full flex items-center justify-between gap-1" >
        {/*search*/}
        <div className="bg-secondary w-full px-1 py-1 mt-0 rounded-md flex items-center justify-center">
          <GoSearch className="text-2xl text-white py-1" />
          <input type="text" className="flex-1 px-2 py-1 text-xl bg-transparent outline-none border-none
          text-primaryText placeholder:text-gray-600" placeholder="Search Here..." />
        </div>


        {/*profile*/}
        {!user && (
          <motion.div whileTap={{ scale: 0.9 }} className="flex items-center justify-center gap-3 pl-3" >
            <Link to={"/home/auth"} className="bg-emerald-500 px-6 py-2 rounded-md text-white text-lg 
            cursor-pointer hover:bg-emerald-700">
              SignUp
            </Link>

          </motion.div>
        )}

        {user && (
          <div></div>
        )}
      </div>


      {/* bottom section*/}
      <div className="w-full">
        <Routes>
          <Route path="/*" element={<Projects />} />
          <Route path="/auth" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  </>
  )
}

export default Home;
