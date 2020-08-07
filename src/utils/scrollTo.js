const scrollTo = (element) => {
   const navigationWidth = document.getElementById("navigation").offsetHeight;
   const elementPosition = document.getElementById(element).offsetTop;

   window.scrollTo({
      top: elementPosition - navigationWidth
   })
}

export default scrollTo;
