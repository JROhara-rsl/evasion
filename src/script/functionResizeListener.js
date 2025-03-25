const resizeListener = (heightContent, setHeightContent) => {
  var sectionsHeight = 0;
    const newHeights = {};
    // ForEach pour mapper le height de chaque section
    Object.keys(heightContent).forEach((nameSection) => {
      const sectionElement = document.querySelector('#' + nameSection);
      if (sectionElement) {         
        sectionsHeight = sectionsHeight + sectionElement.offsetHeight;
        newHeights[nameSection] = sectionsHeight;
      }
    })
    setHeightContent(newHeights);
};
  
export default resizeListener; 