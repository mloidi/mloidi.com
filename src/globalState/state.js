import React from 'react';

import { DataProvider } from '.';

function ProviderComposer({ context, children }) {
  return context.reduceRight(
    (kids, parent) => React.cloneElement(parent, { children: kids }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer context={[<DataProvider />]}>
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
