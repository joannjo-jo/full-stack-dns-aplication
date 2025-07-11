import React, { createContext } from "react";
import { useState } from "react";

export const Status = createContext();

function FormProvider({ children }) {
  const [formdata, setFormdata] = useState({});

  return (
    <div>
      <Status.Provider value={{ formdata, setFormdata }}>
        {children}
      </Status.Provider>
    </div>
  );
}

export default FormProvider;
