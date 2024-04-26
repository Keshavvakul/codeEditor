import { useState } from "react";
import { UserAuthInput } from "../components";
import { HiMail } from "react-icons/hi";
import { TbPassword } from "react-icons/tb";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getEmailValidation, setGetEmailValidation] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="w-full flex flex-col justify-center items-center py-16">
      <div
        className="px-6 w-full md:w-auto py-3 rounded-xl bg-secondary shadow-md
      flex flex-col  items-center justify-center gap-3 "
      >
        {/* email */}
        <UserAuthInput
          label="Email"
          placeHolder="Email here..."
          isPass={false}
          key="Email"
          setStateFunction={setEmail}
          Icon={HiMail}
          setGetEmailValidation={setGetEmailValidation}
        />

        {/* password*/}
        <UserAuthInput
          label="Password"
          placeHolder="Password here..."
          isPass={true}
          key="password"
          setStateFunction={setPassword}
          Icon={TbPassword}
        />

        {/* alert section*/}

        {/* login button */}
        {!isLogin ? (
          <motion.div
            className="flex items-center justify-center w-full
        py-2 h-12 mt-3 rounded-xl bg-emerald-500 cursor-pointer hover:bg-emerald-400"
          >
            <p className="text-xl text-white">Sign Up</p>
          </motion.div>
        ) : (
          <motion.div
            className="flex items-center justify-center w-full
        py-2 h-12 mt-3 rounded-xl bg-emerald-600 cursor-pointer hover:bg-emerald-500"
          >
            <p className="text-xl text-white">Log in</p>
          </motion.div>
        )}

        {/* account text section*/}
        {!isLogin ? (
          <p className="text-sm mt-3 text-primaryText flex items-center justify-center gap-3">
            Already have an account !{" "}
            <span
              onClick={() => {
                setIsLogin(!isLogin);
              }}
              className="text-emerald-600 cursor-pointer"
            >
              Login Here
            </span>
          </p>
        ) : (
          <p className="text-sm mt-3 text-primaryText flex items-center justify-center gap-3">
            Doesn't have an account !{" "}
            <span
              onClick={() => {
                setIsLogin(!isLogin);
              }}
              className="text-emerald-600 cursor-pointer"
            >
              Create Here
            </span>
          </p>
        )}

        {/* or section*/}
        <div className="flex items-center mt-2  justify-center gap-12">
          <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
          <p className="text-sm text-[rgba(256,256,256,0.2)]">OR</p>
          <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
        </div>

        {/* signin with google*/}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)]
          backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
        >
          <FcGoogle className="text-3xl" />
          <p className="text-xl text-white">Sign in with google</p>
        </motion.div>

        {/* or section */}
        <div className="flex items-center mt-2  justify-center gap-12">
          <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
          <p className="text-sm text-[rgba(256,256,256,0.2)]">OR</p>
          <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
        </div>

        {/* signin with github*/}
        <motion.div
          className="flex gap-3 justify-center items-center bg-[rgba(256,256,256,0.2)]
        w-full py-3 rounded-xl backdrop-blur-md cursor-pointer hover:bg-[rgba(256,256,256,0.4)]"
        >
          <FaGithub className="text-3xl text-white" />
          <p className="text-xl text-white">Sign in with gitHub</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
