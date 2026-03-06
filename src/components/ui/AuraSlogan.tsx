import Image from "next/image";

type AuraSloganProps = {
  height?: number;
  className?: string;
};

export function AuraSlogan({ height = 40, className }: AuraSloganProps) {
  // Original aspect ratio: 2033 x 1044
  const width = Math.round(height * (2033 / 1044));

  return (
    <Image
      src="/aura-slogan.svg"
      alt="a space to remember"
      width={width}
      height={height}
      className={className}
    />
  );
}
