'use client';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  variant: 'views' | 'clicks' | 'engagementRate';
  trend?: string;
}

export function StatsCard({ title, value, icon, variant, trend }: StatsCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'views':
        return 'bg-blue-600/10 border-blue-400/30 text-blue-100';
      case 'clicks':
        return 'bg-green-600/10 border-green-400/30 text-green-100';
      case 'engagementRate':
        return 'bg-purple-600/10 border-purple-400/30 text-purple-100';
      default:
        return 'bg-purple-600/10 border-purple-400/30 text-purple-100';
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case 'views':
        return 'text-blue-400';
      case 'clicks':
        return 'text-green-400';
      case 'engagementRate':
        return 'text-purple-400';
      default:
        return 'text-purple-400';
    }
  };

  return (
    <div className={`card ${getVariantStyles()}`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`${getIconColor()}`}>
          {icon}
        </div>
        {trend && (
          <span className="text-xs font-medium bg-green-600/20 text-green-300 px-2 py-1 rounded-full">
            {trend}
          </span>
        )}
      </div>
      
      <div>
        <p className="text-2xl font-bold text-white mb-1">{value}</p>
        <p className="text-sm opacity-80">{title}</p>
      </div>
    </div>
  );
}
