import * as React from "react";
import Title from "app2/Title" 

const RemoteUserList = React.lazy(() => import("app2/UserList"))

const App = () => {
  const [shown,setShown] = React.useState(false)
  return <div>
    <h1>Module Federation PoC</h1>
    <h2>App 1</h2>
    <Title></Title>
    <button onClick={() => setShown(flg => !flg)}>click here</button>
    {shown && <React.Suspense fallback="Loading Button">
      <RemoteUserList></RemoteUserList>
    </React.Suspense>}
  </div>
}

export default App;
