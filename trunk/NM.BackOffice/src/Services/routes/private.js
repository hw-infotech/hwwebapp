export default ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
      window.globalState.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/signin',
          state: {from: props.location}
        }} />
      )
    )} />
  )