"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { BancoProvider } from './BancoContext';
import Banco from './Banco';


const Index = () => {
return (
<><BancoProvider><Banco /></BancoProvider></>
);

}
export default Index;
