import React from "react";

export interface TrayProviderProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeView: ViewType;
  setActiveView: React.Dispatch<React.SetStateAction<ViewType>>;
}

export type ViewType = "private-key" | "default" | "secret" | "remove";

export const TrayContext = React.createContext<TrayProviderProps | null>(null);

const TrayProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);

  const [activeView, setActiveView] = React.useState<ViewType>("default");

  return (
    <TrayContext.Provider
      value={{
        open,
        setOpen,
        activeView,
        setActiveView,
      }}
    >
      {children}
    </TrayContext.Provider>
  );
};

export default TrayProvider;
