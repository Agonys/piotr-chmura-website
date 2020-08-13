const sizes = {
   desktop: "1440px",
   laptopM: "1200px",
   laptop: "1024px",
   tablet: "768px",
   mobileL: "480px",
}

export const devices = {
   desktop: `(min-width: ${sizes.desktop})`,
   laptopM: `(min-width: ${sizes.laptopM})`,
   laptop: `(min-width: ${sizes.laptop})`,
   tablet: `(min-width: ${sizes.tablet})`,
   mobileL: `(min-width: ${sizes.mobileL})`,
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
