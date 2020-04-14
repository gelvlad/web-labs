window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('[role="tab"]');

    tabs.forEach(tab => {
      tab.addEventListener("click", changeTabs);
    });

    function changeTabs(e) {
        const navLink = e.target;
        const nav = navLink.parentNode.parentNode;
        const tabsNode = nav.parentNode;
      
        nav.querySelectorAll('[aria-selected="true"]')
            .forEach(t => {
                t.setAttribute("aria-selected", false);
                t.parentNode.classList.toggle("active", 0);
            });
      
        navLink.setAttribute("aria-selected", true);
        navLink.parentNode.classList.toggle("active", 1);
      
        tabsNode.querySelectorAll('[role="tabpanel"]')
            .forEach(p => p.setAttribute("hidden", true));
      
        tabsNode.querySelector(`#${navLink.getAttribute("aria-controls")}`)
            .removeAttribute("hidden");
    }
});
