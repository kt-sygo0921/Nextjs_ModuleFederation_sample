import React from 'react';

interface props {
    scope: string,
    module: string,
}

declare var global: any 

export const DynamicWidget = ({ scope, module, ...props }: props) => {
    // console.log(global)
    if (!global[scope]) {
      return null;
    }
  
    const Component = React.lazy(() =>
      global[scope].get(module).then((factory: any) => {
        const Module = factory();
        return Module;
      })
    );
  
    return (
      <React.Suspense fallback="Loading System">
        <Component {...props} />
      </React.Suspense>
    );
};