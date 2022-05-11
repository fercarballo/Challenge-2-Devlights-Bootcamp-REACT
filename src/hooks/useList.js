import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";

export function useList () {
  const listContext = useContext(ListContext);

  if (listContext === undefined) {
    throw Error(
      "useDashboard esta fuera del proveedor DashboardContextProvider"
    );
  }

  return listContext;
}
