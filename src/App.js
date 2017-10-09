import React,  {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {RaisedButton,AppBar,AutoComplete,Avatar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

    }


    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <input type={'text'} onChange={(e) => {
                        this.setState({text: e.target.value});
                    }}/>
                    <p className="App-intro">{this.state.text}1111</p>
                    <RaisedButton label="Default" />
                    <AutoComplete style={styles.autocomplete} anchorOrigin={ {vertical: 'bottom', horizontal: 'left'}}
                                  dataSource={["abcd",'def']}
                    />
                    <Avatar style={{alignSelf:'center'}} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Pzhv88BT7wv7TDgmLeYkuNzAO7fkpmnEhwfDOP9f_Gd6U3Y'}/>
                </div>
            </MuiThemeProvider>
        );
    }
}
const styles={
    autocomplete:{
        backgroundColor:'red',alignSelf:'center'
    }
}
