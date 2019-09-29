import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class DynamicBackground extends React.Component{

    private uri:Array<string> = null;

    constructor(){
        super({});
        this.uri = [
            'https://tinyurl.com/y2eojx55',
            'https://tinyurl.com/yxa5knxb',
            'https://tinyurl.com/y2spm2d9',
            'https://tinyurl.com/y2vkcvlg',
            'https://tinyurl.com/y37cvqou',
            'https://tinyurl.com/yy5elyo3'
        ];
    }

    private getRanDomNumberWithRange(min=1,max=1000){
        return (Math.floor(Math.random() * max) + min);
    }


    private generateBackground():string{
        const index = this.getRanDomNumberWithRange(0,this.uri.length-1);
        return this.uri[index];
    }

    private getStyle(){
        const style = {
            'background-image':`url(${this.generateBackground()})`,
            "background-color":"#290811",
            "background-repeat":'no-repeat',            
            position:'fixed',
            height:'100%',
            width:'100%',
            "background-size":"110% auto",
            "background-blend-mode":"multiply"

        };

        return style;
    }

    render(){
      const style = this.getStyle();
      const spacing = 2;
      const divBG = (<div className="active-dynamic-background" style={style}>
          Hello back
      </div>);
      
      return divBG;
    }

}