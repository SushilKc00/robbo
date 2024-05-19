import Image from "next/image";
import React from "react";

const AstrixBrand = "/images/Astrix Branding.png";
const AstrixBrandLogo = "/images/Logo.png";

function HeaderLogo() {
  return (
    <div className="flex items-center px-6">
      <div className="relative max-w-16 w-full aspect-[4/4]">
        <Image
          src={AstrixBrand}
          alt="Astrix-Brand-Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative max-w-48 w-full aspect-[4/2]">
        <Image
          src={AstrixBrandLogo}
          alt="Astrix-Brand-Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default HeaderLogo;
