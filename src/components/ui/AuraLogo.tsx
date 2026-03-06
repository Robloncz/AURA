import Image from "next/image";

type AuraLogoProps = {
  height?: number;
  className?: string;
};

export function AuraLogo({ height = 40, className }: AuraLogoProps) {
  // Original aspect ratio: 1964 x 1789
  const width = Math.round(height * (1964 / 1789));

  return (
    <Image
      src="/aura-logo.svg"
      alt="AURA"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
