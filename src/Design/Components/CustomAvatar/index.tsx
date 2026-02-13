import Avatar, { AvatarProps } from "@mui/material/Avatar";

interface CustomAvatarProps extends AvatarProps {
  // variant?: "circular" | "rounded" | "square"
  src?: string;
  alt?: string;
  icon?: React.ReactNode;
  size?: number; // Optional custom prop for easy scaling
}

const CustomAvatar = ({
  // variant = "circular",
  src,
  alt,
  icon,
  size = 40,
  children,
  ...props // Capture any other standard MUI props
}: CustomAvatarProps) => {
  // Logic to determine what to show inside the Avatar
  // Priority: 1. Image (src) -> 2. Icon -> 3. Initials (children)
  const renderContent = () => {
    if (src) return null; // MUI Avatar handles src automatically
    if (icon) return icon;
    return children;
  };

  return (
    <Avatar
      // variant={variant}
      alt={alt}
      src={src}
      sx={{
        width: size,
        height: size,
        fontSize: size * 0.5, // Automatically scale font size based on Avatar size
        ...props.sx, // Allow external sx overrides
      }}
      {...props} // Spread remaining props like onClick or className
    >
      {/* If no image src, it will render children (initials) */}
      {renderContent()}
    </Avatar>
  );
};

export default CustomAvatar;
