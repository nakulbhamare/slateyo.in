import React, { createContext, useContext, useState } from 'react';
import { Cafe, Moment, Reward } from '../types';
import { POPULAR_CAFES, COMMUNITY_MOMENTS, SLATE_REWARDS } from '../data/mockData';
import { triggerConfetti } from '../components/common/ConfettiEffect';

interface Toast {
  id: string;
  title: string;
  message: string;
  type: 'points' | 'reward' | 'success' | 'info';
}

interface AppContextType {
  cafes: Cafe[];
  moments: Moment[];
  rewards: Reward[];
  userPoints: number;
  addPoints: (amount: number, reason?: string) => void;
  toggleLikeMoment: (momentId: string) => void;
  addNewMoment: (newMoment: Partial<Moment>) => void;
  
  // Modals
  isExploreOpen: boolean;
  setIsExploreOpen: (open: boolean) => void;
  isShareOpen: boolean;
  setIsShareOpen: (open: boolean) => void;
  isOwnerModalOpen: boolean;
  setIsOwnerModalOpen: (open: boolean) => void;
  isQRScanModalOpen: boolean;
  setIsQRScanModalOpen: (open: boolean) => void;
  
  // Lightbox
  activeLightboxMoment: Moment | null;
  setActiveLightboxMoment: (moment: Moment | null) => void;
  
  // Selected cafe for quick view
  selectedCafe: Cafe | null;
  setSelectedCafe: (cafe: Cafe | null) => void;

  // Toast
  toasts: Toast[];
  dismissToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cafes] = useState<Cafe[]>(POPULAR_CAFES);
  const [moments, setMoments] = useState<Moment[]>(COMMUNITY_MOMENTS);
  const [rewards] = useState<Reward[]>(SLATE_REWARDS);
  const [userPoints, setUserPoints] = useState<number>(80);
  
  // Modals
  const [isExploreOpen, setIsExploreOpen] = useState<boolean>(false);
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState<boolean>(false);
  const [isQRScanModalOpen, setIsQRScanModalOpen] = useState<boolean>(false);
  const [activeLightboxMoment, setActiveLightboxMoment] = useState<Moment | null>(null);
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);
  
  // Toast notifications
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (title: string, message: string, type: Toast['type'] = 'points') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      dismissToast(id);
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addPoints = (amount: number, reason: string = 'Moment Shared!') => {
    const prevPoints = userPoints;
    const nextPoints = prevPoints + amount;
    setUserPoints(nextPoints);

    if (prevPoints < 100 && nextPoints >= 100) {
      triggerConfetti();
      showToast('🎉 Free Coffee Unlocked!', `You hit 100 Slate Points! Claim your free beverage anytime.`, 'reward');
    } else {
      showToast(`+${amount} Slate Points`, reason, 'points');
    }
  };

  const toggleLikeMoment = (momentId: string) => {
    setMoments((prev) =>
      prev.map((m) => {
        if (m.id === momentId) {
          const isLiked = !m.isLiked;
          return {
            ...m,
            isLiked,
            likesCount: isLiked ? m.likesCount + 1 : m.likesCount - 1,
          };
        }
        return m;
      })
    );
  };

  const addNewMoment = (newMomentData: Partial<Moment>) => {
    const newMoment: Moment = {
      id: `m-${Date.now()}`,
      cafeId: newMomentData.cafeId || 'third-wave',
      cafeName: newMomentData.cafeName || 'Third Wave Coffee',
      cafeNeighborhood: newMomentData.cafeNeighborhood || 'Koramangala',
      cafeCity: newMomentData.cafeCity || 'Bengaluru',
      authorName: 'You',
      authorHandle: '@you.discover',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      caption: newMomentData.caption || 'Chasing quiet moments & velvety pour-overs.',
      imageUrl: newMomentData.imageUrl || 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
      likesCount: 1,
      isLiked: true,
      pointsEarned: 20,
      timestamp: 'Just now',
      category: (newMomentData.category as any) || 'Morning Brew',
      tag: newMomentData.tag || 'Fresh Pour',
    };

    setMoments((prev) => [newMoment, ...prev]);
    addPoints(20, 'You shared a new café moment!');
  };

  return (
    <AppContext.Provider
      value={{
        cafes,
        moments,
        rewards,
        userPoints,
        addPoints,
        toggleLikeMoment,
        addNewMoment,
        isExploreOpen,
        setIsExploreOpen,
        isShareOpen,
        setIsShareOpen,
        isOwnerModalOpen,
        setIsOwnerModalOpen,
        isQRScanModalOpen,
        setIsQRScanModalOpen,
        activeLightboxMoment,
        setActiveLightboxMoment,
        selectedCafe,
        setSelectedCafe,
        toasts,
        dismissToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
