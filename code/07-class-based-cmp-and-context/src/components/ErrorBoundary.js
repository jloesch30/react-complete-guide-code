import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  // this makes the component a error boundary triggers when a child sends an error
  componentDidCatch(error) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p>something went wrong!</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
