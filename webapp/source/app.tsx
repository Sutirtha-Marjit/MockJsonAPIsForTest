import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DynamicBackground } from './components/dynamic.background.component';

export class Application extends React.Component{
    constructor(props:any){
        super(props);
    }

    render(){
        const rootTSX =         
        <div>
            <DynamicBackground></DynamicBackground>    
        </div>;

        return rootTSX;
    }
}

export function init(div:HTMLDivElement){
    const app = new Application({});
    ReactDOM.render(app.render(),div);
}

init(document.querySelector('.wrapper'));