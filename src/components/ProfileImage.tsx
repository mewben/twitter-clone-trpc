import Image from "next/image";

interface Props {
  src?: string | null;
  className?: string;
}

export const ProfileImage = ({ src, className = "" }: Props) => {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}
    >
      {!!src && <Image src={src} alt="Profile Image" quality={100} fill />}
    </div>
  );
};
