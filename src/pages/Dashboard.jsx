import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import BarGraph from '../partials/dashboard/BarGraph.jsx';
import LiveChart from '../partials/dashboard/LiveChart.jsx';
import CountryChart from '../partials/dashboard/CountryChart.jsx';
import SalesChart from '../partials/dashboard/SalesChart.jsx';

function Dashboard() {

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

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Bar chart (Direct vs Indirect) */}
              <BarGraph />
              {/* Line chart (Real Time Value) */}
              <LiveChart />
              {/* Doughnut chart (Top Countries) */}
              <CountryChart />
              {/* Table (Top Channels) */}
              <SalesChart />

            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default Dashboard;
