import { Redirect, Route } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import React from 'react'

const AuthRoute = inject('userStore')(observer(({ component: Component, userStore,...rest }) => {
	return (
		<Route
			{...rest}
			render = {props =>
				userStore.currentUser ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
							// state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
}))

export default AuthRoute
