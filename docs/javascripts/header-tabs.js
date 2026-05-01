(function () {
  const DESKTOP_BREAKPOINT = 1220;
  let placeholder = null;

  function getNodes() {
    const headerInner = document.querySelector(".md-header__inner");
    const tabs = document.querySelector(".md-tabs[data-md-component='tabs']");
    const search = document.querySelector(".md-search[data-md-component='search']");
    return { headerInner, tabs, search };
  }

  function ensurePlaceholder(tabs) {
    if (!tabs || placeholder) return;
    placeholder = document.createComment("tenx-tabs-placeholder");
    tabs.parentNode.insertBefore(placeholder, tabs);
  }

  function moveTabs() {
    const { headerInner, tabs, search } = getNodes();
    if (!headerInner || !tabs) return;

    ensurePlaceholder(tabs);

    if (window.innerWidth >= DESKTOP_BREAKPOINT && search) {
      if (!headerInner.contains(tabs)) {
        headerInner.insertBefore(tabs, search);
      }
      tabs.classList.add("tenx-inline-tabs");
    } else {
      if (placeholder && tabs.previousSibling !== placeholder) {
        placeholder.parentNode.insertBefore(tabs, placeholder.nextSibling);
      }
      tabs.classList.remove("tenx-inline-tabs");
    }
  }

  window.addEventListener("DOMContentLoaded", moveTabs);
  window.addEventListener("resize", moveTabs);
})();
