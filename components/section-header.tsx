import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({ 
  title, 
  description, 
  className,
  titleClassName,
  descriptionClassName
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "flex flex-col items-center w-full gap-3 text-center text-balance",
      className
    )}>
      {title && (
        <h2 className={cn(
          "font-semibold text-4xl leading-tight max-w-lg",
          titleClassName
        )}>
          {title}
        </h2>
      )}
      {description && (
        <p className={cn(
          "text-muted-foreground",
          descriptionClassName
        )}>
          {description}
        </p>
      )}
    </div>
  );
}

