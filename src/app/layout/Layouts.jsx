import { Outlet} from "react-router-dom";
import { memo } from "react";




export const Layout = memo(() => {
  

  return (
      <main>
        <Outlet />
      </main>

  );
});