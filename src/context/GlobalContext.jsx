//rrd import
import { createContext } from 'react';

export const GlobalContext = createContext();

function GlobalContext({ children }) {
  return <GlobalContext.Provider value={1}>{}</GlobalContext.Provider>;
}
export default GlobalContext;
