/**
 * first get all tabs and their contents.
 * for all tabs, remove active class from all tabs and contents
 * for the tab that is clicked, that is the currently active tab,
 * add the active class to that tab and its content
 */

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  // add the click event listener for each tab
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-tab");

    // remove active class for all tabs and its contents
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    // add active class for the clicked tab and its content
    tab.classList.add("active");
    document
      .querySelector(`.tab-content[data-content="${target}"]`)
      .classList.add("active");
  });
});
