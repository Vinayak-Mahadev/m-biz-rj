import React from 'react';
import routes from '../routes';


export default function MiniDrawer() {
  
  return (
    <div >
      <main className="to do">
        {routes}
      </main>
    </div>
  );
}
