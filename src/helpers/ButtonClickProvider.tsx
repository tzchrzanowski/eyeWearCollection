import React, {createContext, useContext, useState, ReactNode} from "react";

interface ButtonClickContextType {
    eyewearTypeContext: string;
    setEyewearTypeContext: React.Dispatch<React.SetStateAction<string>>;
    genderTypeSelectedContext: string;
    setGenderTypeSelectedContext: React.Dispatch<React.SetStateAction<string>>;
}

interface ButtonClickProviderProps {
    children: ReactNode;
}

export const ButtonClickContext = createContext<ButtonClickContextType | undefined> (undefined);

export const ButtonClickProvider: React.FC<ButtonClickProviderProps> = ({ children }) => {
    const [eyewearTypeContext, setEyewearTypeContext] = useState('');
    const [genderTypeSelectedContext, setGenderTypeSelectedContext] = useState('');

    return (
        <ButtonClickContext.Provider value={{ eyewearTypeContext, setEyewearTypeContext, genderTypeSelectedContext, setGenderTypeSelectedContext }}>
            {children}
        </ButtonClickContext.Provider>
    );
};
