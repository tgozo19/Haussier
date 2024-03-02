import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import BarGraph from '../partials/dashboard/BarGraph.jsx';
import LiveChart from '../partials/dashboard/LiveChart.jsx';
import CountryChart from '../partials/dashboard/CountryChart.jsx';
import SalesChart from '../partials/dashboard/SalesChart.jsx';

function Page404() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <h4 className={"text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-3"}>Joke of the day</h4>
            <p className={"mb-3"}>I got you. You think the developer didn't implement a 404 page, right?</p>
            <p>Anyways, this page doesn't exist. Try searching for something else!</p>
          </div>
        </main>

      </div>
    </div>
  );
}

export default Page404;
