import { ReactNode } from 'react';
import SpotlightCard from '../animations/SpotlightCard/SpotlightCard';

export interface CustomBentoCardProps {
  id?: string;
  children?: ReactNode;
  customClasses?: string;
  // colSpan?: number;
  // rowSpan?: number;
  // order: number;
  onClick?: () => void;
}

const CustomBentoCard = ({
  id,
  children,
  customClasses = '',
  // colSpan,
  // rowSpan,
  // order,
  onClick,
}: CustomBentoCardProps) => {
    const spotlightColor = 'rgba(239, 175, 91, 0.4)';

    const baseClass = 'bento-card';
    // const colSpanClass = colSpan ? `col-span-${colSpan}` : '';
    // const rowSpanClass = rowSpan ? `row-span-${rowSpan}` : '';
    // const gridOrder = `order-[${order}]`;

    const combinedClassName = [
        baseClass,
        // colSpanClass,
        // rowSpanClass,
        // gridOrder,
        customClasses,
    ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      id={id}
      className={combinedClassName}
      onClick={onClick}
    >
        <SpotlightCard className="custom-spotlight-card" spotlightColor={spotlightColor}>
            <div className="bento-card-inner">
                {children}
            </div>
        </SpotlightCard>
    </div>
  );
};

export default CustomBentoCard;