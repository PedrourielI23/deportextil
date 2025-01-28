import React, {
  useState,
  Dispatch,
  SetStateAction,
  createContext,
} from "react";

import { Interfaces } from "@/types";

export interface BancoContextProps {
  banco: Interfaces.IBanco;
  setBanco: Dispatch<SetStateAction<Interfaces.IBanco>>;
}

interface BancoProviderProps {
  children: React.ReactNode;
}

export const BancoContext = createContext({} as BancoContextProps);

export const BancoProvider = (props: BancoProviderProps) => {
  const defaultValues = {
    idBanco: "",
    nombre: "",
  };

  const [banco, setBanco] = useState<Interfaces.IBanco>(defaultValues);
  const value = {
    banco,
    setBanco,
  };

  return <BancoContext.Provider value={value}>{props.children}</BancoContext.Provider>;
};
