import React, {createContext, useContext, useState, ReactNode} from "react";

interface ButtonClickContextType {
    clickedButton: string;
    setClickedButton: React.Dispatch<React.SetStateAction<string>>;
}

interface ButtonClickProviderProps {
    children: ReactNode;
}

export const ButtonClickContext = createContext<ButtonClickContextType | undefined> (undefined);

export const ButtonClickProvider: React.FC<ButtonClickProviderProps> = ({ children }) => {
    const [clickedButton, setClickedButton] = useState('');

    return (
        <ButtonClickContext.Provider value={{ clickedButton, setClickedButton }}>
            {children}
        </ButtonClickContext.Provider>
    );
};
