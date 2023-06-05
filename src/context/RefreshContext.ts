import { createContext } from "react";
import { RefreshContextInterface } from "../interface/Interface";


export const RefreshContext = createContext<RefreshContextInterface | null>(null)