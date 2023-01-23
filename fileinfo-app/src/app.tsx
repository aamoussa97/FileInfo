import * as ReactDOM from 'react-dom';

const App = () => {
    return(
        <div>
            <h2>Hello from React!</h2>
        </div>
    )
}

function render() {
    ReactDOM.render(App(), document.body);
}

render();