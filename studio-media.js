const studioImages = {
  "assets/images/services/classic-cut.webp": "assets/images/editorial/scissor-cut.webp",
  "assets/images/services/fade-cut.webp": "assets/images/editorial/detailing.webp",
  "assets/images/services/styling.webp": "assets/images/editorial/detailing.webp",
  "assets/images/services/beard-trim.webp": "assets/images/editorial/shave.webp",
  "assets/images/services/hair-beard.webp": "assets/images/editorial/scissor-cut.webp",
  "assets/images/services/facial.webp": "assets/images/editorial/facial.webp",
  "assets/images/services/face-mask.webp": "assets/images/editorial/mask.webp",
  "assets/images/services/hair-care.webp": "assets/images/editorial/wash.webp",
  "assets/images/services/kids.webp": "assets/images/editorial/kids.webp",
  "assets/images/services/home-haircut.webp": "assets/images/editorial/house-call.webp",
  "assets/images/services/home-full.webp": "assets/images/editorial/house-call.webp",
  "assets/images/groom/groom-essential.webp": "assets/images/editorial/groom.webp",
  "assets/images/groom/groom-premium.webp": "assets/images/editorial/groom-formal.webp",
  "assets/images/groom/groom-royal.webp": "assets/images/editorial/groom-portrait.webp"
};
for (const item of [...CONFIG.services, ...CONFIG.groomPackages]) {
  item.img = studioImages[item.img] || item.img;
}
