import React from 'react'
import {message} from 'antd'

class ErrorMsg extends React.Component {
	state = { hasError: false };

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
		message.error(info, 4)
		// You can also log the error to an error reporting service
		// logErrorToMyService(error, info);
	}

	render() {
		// if (this.state.hasError) {
		// 	return null;
		// }
		return this.props.children;
	}
}

export default ErrorMsg
