import React from 'react';

interface ITabContext {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const TabContext = React.createContext<ITabContext>({
    activeTab: '',
    setActiveTab: () => {},
});


function TabProvider({ children }: { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = React.useState('alljobs');

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabContext.Provider>
    );
}

export const useTab = () => React.useContext(TabContext);

export default TabProvider;