import React from 'react';
import FileInfo from "./components/FileInfo";
import NavigationBar from "./components/NavigationBar";

const App: React.FC = () => {
    return(
        <div>
            <NavigationBar/>
            <FileInfo/>
        </div>
    );
}

export default App;