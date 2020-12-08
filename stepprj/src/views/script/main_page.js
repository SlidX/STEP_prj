class Header extends React.Component {
    render(){
        return(
            React.createElement("div", {className: 'header'},
            React.createElement('h1', {className: 'header-text'}, 'STEP'))
        );
    }
}

class MainPage extends React.Component{
    render(){
        return(
            React.createElement('div', {className: "main__page"},
            React.createElement('div', {className: 'login__window'},
            React.createElement('div', {className: "button__container"},
            React.createElement('button', {className: "login button_w"}, "LOG IN"),React.createElement('button', {className: "sign_up button_w"}, "SIGN UP"))))
        );
    }
}

class Page extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <MainPage />
            </div>
            
        );
    }
}


ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );