import React, {createContext, useContext, useState, ReactNode} from "react";

interface ButtonClickContextType {
    genderTypeSelectedContext: string;
    setGenderTypeSelectedContext: React.Dispatch<React.SetStateAction<string>>;
    eyewearTypeContext: string;
    setEyewearTypeContext: React.Dispatch<React.SetStateAction<string>>;
}

interface ButtonClickProviderProps {
    children: ReactNode;
}

export const ButtonClickContext = createContext<ButtonClickContextType | undefined> (undefined);

export const ButtonClickProvider: React.FC<ButtonClickProviderProps> = ({ children }) => {
    const [genderTypeSelectedContext, setGenderTypeSelectedContext] = useState('');
    const [eyewearTypeContext, setEyewearTypeContext] = useState('');

    return (
        <ButtonClickContext.Provider value={{genderTypeSelectedContext, setGenderTypeSelectedContext, eyewearTypeContext, setEyewearTypeContext}}>
            {children}
        </ButtonClickContext.Provider>
    );
};


