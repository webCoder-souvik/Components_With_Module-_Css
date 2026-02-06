import Avatar, { AvatarProps } from "@mui/material/Avatar";

interface CustomAvatarProps extends AvatarProps {
  // variant?: "circular" | "rounded" | "square"
  src?: string;
  alt?: string;
  size?: number; // Optional custom prop for easy scaling
}

const CustomAvatar = ({
  // variant = "circular",
  src,
  alt,
  size = 40,
  children,
  ...props // Capture any other standard MUI props
}: CustomAvatarProps) => {
  return (
    <Avatar
      // variant={variant}
      alt={alt}
      src={src}
      sx={{
        width: size,
        height: size,
        ...props.sx, // Allow external sx overrides
      }}
      {...props} // Spread remaining props like onClick or className
    >
      {/* If no image src, it will render children (initials) */}
      {children}
    </Avatar>
  );
};

export default CustomAvatar;
