import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation
} from 'react-router-dom';

export default function Topics() {
  let match = useRouteMatch()
  // ignore no-unused-vars
  console.log(match)
  console.log(useLocation())
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic></Topic>
        </Route>
        <Route to={match.path}>
          <h3>Please seelct a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}

function Topic() {
  let {topicId} = useParams()
  console.log(useParams())
  return <h3>topic ID: {topicId}</h3>
}