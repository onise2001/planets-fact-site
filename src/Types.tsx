interface PlanetDetails {
  name: string;
  overview: Section;
  structure: Section;
  geology: Section;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
  color: string;
  backgroundColor: string;
  bottom: string;
  bottomTablet: string;
  bottomDesktop: string;
}

interface Section {
  content: string;
  source: string;
}

interface Images {
  planet: string;
  internal: string;
  geology: string;
  sizes: ImageSizes;
}

interface ImageSizes {
  mobileWidth: string | undefined;
  mobileHeight: string | undefined;
  tabletWidth: string | undefined;
  tabletHeight: string | undefined;
  desktopWidth: string | undefined;
  desktopHeight: string | undefined;
  geoMobileWidth: string | undefined;
  geoTabletWidth: string | undefined;
  geoDesktopWidth: string | undefined;
  geoMobileHeight: string | undefined;
  geoTabletHeight: string | undefined;
  geoDesktopHeight: string | undefined;
}

export default PlanetDetails;
