interface DeviceSize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const size: DeviceSize = {
  xs: '40em', // max size for small screen mobile
  sm: '40em', // min size for mobile screen
  md: '48em', // min size for tablets
  lg: '64em', // min size for laptops
  xl: '80em', // min size for desktop / monitors
  xxl: '96em', // min size for big screens
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
};
