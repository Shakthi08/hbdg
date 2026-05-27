'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TabNavigation } from './TabNavigation';
import { Exhibition } from './tabs/Exhibition';
import { Wrapped } from './tabs/Wrapped';
import { Letter } from './tabs/Letter';
import { Finale } from './tabs/Finale';
import { useIsMobile } from '@/hooks/use-mobile';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useIsMobile();

  const tabs = [
    { component: Exhibition },
    { component: Wrapped },
    { component: Letter },
    { component: Finale },
  ];

  const CurrentTab = tabs[activeTab].component;

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} min-h-screen bg-background`}>
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      <main
        className={`flex-1 overflow-auto ${isMobile ? 'pb-28' : ''}`}
        style={{ maxHeight: isMobile ? 'calc(100vh - 120px)' : '100vh' }}
      >
        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CurrentTab />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
