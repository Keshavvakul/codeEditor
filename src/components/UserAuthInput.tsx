import React, { ComponentType, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaEyeSlash } from "react-icons/fa";

type UserAuth = {
  label: string;
  placeHolder: string;
  isPass: boolean;
  key: string;
  setStateFunction: (newValue: string) => void;
  Icon: ComponentType<{ className: string }>;
  setGetEmailValidation?: (isValid: boolean) => void;
};

const UserAuthInput: React.FC<UserAuth> = ({
  label,
  placeHolder,
  isPass,
  setStateFunction,
  Icon,
  setGetEmailValidation,
}) => {
  const [value, setValue] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    setStateFunction(e.target.value);

    if (placeHolder === "Email here...") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const status = emailRegex.test(value);
      console.log(status);
      setIsEmailValid(status);
      setGetEmailValidation?.(status);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <label className="text-sm text-gray-300">{label}</label>
      <div
        className={`flex items-center justify-center gap-2 w-full md:w-61 
      rounded-md px-3 py-1 bg-gray-300 ${
        !isEmailValid &&
        placeHolder === "Email here..." &&
        value.length > 0 &&
        "border-2 border-red-500"
      }`}
      >
        <Icon className="text-text555 text-xl" />
        <input
          type={isPass && showPass ? `password` : `text`}
          placeholder={placeHolder}
          className="flex-1 w-full h-full py-2 outline-none 
          border-none bg-transparent text-text555 text-base"
          value={value}
          onChange={handleTextChange}
        />

        {isPass && (
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowPass(!showPass)}
            className="cursor-pointer"
          >
            {showPass ? (
              <FaEye className="text-text555 text-2xl" />
            ) : (
              <FaEyeSlash className="text-text555 text-2xl" />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UserAuthInput;
