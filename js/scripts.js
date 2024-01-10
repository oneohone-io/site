console.log("We're hiring a react frontend developer");

function onNavbarLinkClick(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth'});
  return false
}