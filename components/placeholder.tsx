import { cn } from "@/lib/utils";

interface PlaceholderProps {
  children?: React.ReactNode;
  className?: string;
}

export function Placeholder({ 
  children = "Placeholder", 
  className 
}: PlaceholderProps) {
  return (
    <div 
      className={cn(
        "bg-muted flex items-center justify-center rounded-lg text-muted-foreground text-sm min-h-[400px] border border-dashed",
        className
      )}
    >
      {typeof children === "string" ? (
        <p className="opacity-50">{children}</p>
      ) : (
        children
      )}
    </div>
  );
}

