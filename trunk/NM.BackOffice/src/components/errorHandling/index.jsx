import { Component } from "react";

class ErrorHandling extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <div>Something went Wrong</div>;
    }
    return children;
  }
}
export default ErrorHandling;
