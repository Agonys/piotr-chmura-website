const sizes = {
   desktop: "1440px",
   laptopM: "1200px",
   laptop: "1024px",
   tablet: "768px",
   mobileL: "480px",
}

export const devices = {
   mobileL: `(min-width: ${sizes.mobileL})`,
   tablet: `(min-width: ${sizes.tablet})`,
   laptop: `(min-width: ${sizes.laptop})`,
   laptopM: `(min-width: ${sizes.laptopM})`,
   desktop: `(min-width: ${sizes.desktop})`,
}

export const colors = {
   white: '#FFFFFF',
   special: '#FFA800',
   black: '#191A1D',
}

export const backgrounds = {
   light: '#303030',
   dark: '#191A1D',
   special: colors.special,
}

export const theme = {
   colors: colors,
   backgrounds: backgrounds,
   fonts: {
      primary: "Segoe UI",
      secondary: "Rubik",
   },
   transitions: {
      ease: "all .3s ease",
   },
}
