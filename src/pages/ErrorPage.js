import React from "react";
import "../styles/error.css"




class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log("==error",error, errorInfo);
        this.setState({hasError:true})
    }


    render() {
        if (this.state.hasError || !this.props.children) {
            return (
                <div style={{
                    width: "100%",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: 'center',
                    paddingTop: "100px",
                    paddingLeft: "-100px"
                }}>
                    <div className="error">
                        <div className="error__title">404</div>
                        <div className="error__subtitle">Hmmm...</div>
                        <div className="error__description">It looks like one of the  developers fell asleep</div>
                        <button className="error__button error__button--active">Go Back</button>
                        <button className="error__button">Reload</button>
                    </div>
                </div>
            )
        } else {
            return this.props.children
        }
    }
}

export default ErrorPage