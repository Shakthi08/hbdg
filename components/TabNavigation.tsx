'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Images, Music, Heart, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TabNavigationProps {
  activeTab: number;
  onTabChange: (tab: number) => void;
}

const TABS = [
  { id: 0, name: 'The Geetibum', icon: Images, label: 'Album' },
  { id: 1, name: 'Friendship Wrapped', icon: Music, label: 'Wrapped' },
  { id: 2, name: 'The Main Event', icon: Heart, label: 'Letter' },
  { id: 3, name: 'The Grand Finale', icon: Sparkles, label: 'Finale' },
];

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-2 flex justify-around z-40">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                'flex flex-col items-center gap-1 p-2 rounded-lg transition-colors',
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted'
              )}
              title={tab.name}
            >
              <Icon size={24} />
              <span className="text-xs">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="w-full md:w-64 bg-card border-r border-border p-6 flex flex-col gap-2 h-screen sticky top-0">
      <h2 className="text-lg font-semibold mb-4 text-primary">Geetika's Birthday Celebration</h2>
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <motion.button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            whileHover={{ x: 4 }}
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left',
              isActive
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'text-foreground hover:bg-muted'
            )}
          >
            <Icon size={20} />
            <div>
              <div className="font-semibold">{tab.label}</div>
              <div className="text-xs opacity-75">{tab.name}</div>
            </div>
          </motion.button>
        );
      })}
    </nav>
  );
}
