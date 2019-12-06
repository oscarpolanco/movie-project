import React, { Component } from "react";
import { errorContainer, errorImage } from "./style";

/**
 * Render an error message or a page
 * @class ErrorBoundry
 *
 * @extends {React.Component}
 */
class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  /**
   * This lifecycle method invoked after an error has been thrown by a descendant component.
   */
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  /**
   * This lifecycle method invoked after an error has been thrown by a descendant component.
   */
  componentDidCatch(error, info) {
    console.error("ErrorBoundry catch this error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div css={errorContainer}>
          <i className="fa fa-times-circle"></i>
          <h1>Something went wrong. Please refresh the page.</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
