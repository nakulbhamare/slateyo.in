export interface Cafe {
  id: string;
  name: string;
  tagline: string;
  city: string;
  neighborhood: string;
  address: string;
  rating: number;
  reviewCount: number;
  momentsCount: number;
  membersCount: number;
  coverImage: string;
  avatarImage: string;
  tags: string[];
  vibe: string;
  perks: string[];
  featuredMoments: string[];
}

export interface Moment {
  id: string;
  cafeId: string;
  cafeName: string;
  cafeNeighborhood: string;
  cafeCity: string;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  caption: string;
  imageUrl: string;
  likesCount: number;
  isLiked?: boolean;
  pointsEarned: number;
  timestamp: string;
  category: 'Morning Brew' | 'Ambience' | 'Work & Study' | 'Sweet Treats' | 'Specialty' | 'Vibes';
  tag: string;
}

export interface Reward {
  id: string;
  cafeId?: string;
  cafeName?: string;
  title: string;
  description: string;
  pointsRequired: number;
  category: 'Coffee' | 'Food' | 'Discount' | 'Perk' | 'Experience';
  icon: string;
  popular?: boolean;
  claimedCount: number;
}

export interface MetricData {
  totalMoments: number;
  activeMembers: number;
  rewardsClaimed: number;
  monthlyGrowthRate: number;
}
