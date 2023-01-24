import React, {useEffect, useState} from 'react';
import FileInfo from "./components/FileInfo";
import NavigationBar from "./components/NavigationBar";
import DragAndDrop from "./components/DragAndDrop";
import LoadingIndicator from "./components/LoadingIndicator";

const App: React.FC = () => {
    const [show, setShow] = useState(true);

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
        <div>
            {
                //show ?
                1 == 2 ?
                <LoadingIndicator/> :
                <div>
                    <NavigationBar/>
                </div>
            }
        </div>
    );
}

export default App;