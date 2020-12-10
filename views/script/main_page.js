// import React, { Component } from 'react';
// import { Header } from './logsignpage'
// import { Page } from './logsignpage'
// import { MainPage } from './logsignpage' <------ надо будет потом разобраться с этим

//loginpage
class Header extends React.Component {
    render(){
        return(
            React.createElement("div", {className: 'header'},
            React.createElement('h1', {className: 'header-text'}, 'STEP'))
        )
    }
}

class MainPage extends React.Component{
    render(){
        return(
            React.createElement('div', {className: "main__page"},
            React.createElement('div', {className: 'login__window'},
            React.createElement('div', {className: "button__container"},React.createElement('button', {className: "login button_w"}, "LOG IN"),React.createElement('button', {className: "sign_up button_w"}, "SIGN UP")),
            React.createElement('h1',{ className : "login__window__text"},"MAIL") , React.createElement("input", {type : "text" , className: "login__window__area login__window__formail"}) , React.createElement('h1',{ className : "login__window__text"},"PASSWORD") , React.createElement('input' , {type: "text" , className: "login__window__area login__window__forlogin"})))
        )
    }
}

class Page extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <MainPage />
            </div>
            
        )
    }
}

//jobtablepage

class Jobtablepage extends React.Component{
    render(){
        return(
            React.createElement('div',{className : "jobtable__c"},React.createElement('div', {className: "jobtable__main"}))
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );

document.querySelector('.login').addEventListener('click',()=>{
    if( document.querySelector('.login__window__forlogin').value == 'admin'){
        ReactDOM.render(
            <Jobtablepage />,
            document.getElementById('root')
          );
    }

    else{
        alert('Даже не пытайся , мэнчик')
    }
})