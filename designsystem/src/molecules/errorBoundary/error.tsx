import * as React from "react";
import { Card } from "design-system";
interface ErrorProps {
  children: any;
}

export default class ErrorBoundary extends React.Component<ErrorProps,{ hasError: any; }> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
     return { hasError: true };
  }

 

  render() {
    if (this.state.hasError) {
      return (
        <>
        <Card className="p-4 cursor-pointer border rounded-md">
        <p>
          Something went wrong and the content to show in this section is
          currently unavailable
        </p>
        </Card>
        </>
      );
    }

    return this.props.children;
  }
}
