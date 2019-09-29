import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Application extends React.Component{
    constructor(props:any){
        super(props);
    }

    render(){
        const rootTSX = <div className='container-fluid'>
            <br/>
            <h3 className="text-primary">Welcome to React TSX App</h3>
            <hr/>
            <small>App is configured with TypeScript and React</small>
        </div>;

        return rootTSX;
    }
}

export function init(div:HTMLDivElement){
    const app = new Application({});
    ReactDOM.render(app.render(),div);
}

init(document.querySelector('.wrapper'));