import React, {useEffect, useState} from 'react';
import NavigationBar from "./components/NavigationBar";
import LoadingIndicator from "./components/LoadingIndicator";

import { ConfigProvider, theme } from "antd";

const { defaultAlgorithm, darkAlgorithm } = theme;

const App: React.FC = () => {
    const [show, setShow] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const delay = 0;
        const timer1 = setTimeout(() => setShow(true), delay * 1000);

        // this will clear Timeout
        // when component unmount like in willComponentUnmount
        // and show will not change to true
        return () => {
            clearTimeout(timer1);
        };
    }, []);

    return(
        <ConfigProvider
            theme={{
                algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
            }}>
            <div>
                {
                    //show ?
                    1 == 2 ?
                        <LoadingIndicator/> :
                        <div>
                            <NavigationBar isDarkMode={isDarkMode}/>
                        </div>
                }
            </div>
        </ConfigProvider>
    );
}

export default App;