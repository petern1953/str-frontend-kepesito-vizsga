function changeOuterLinks() {
    const setOuter = (link) => link.setAttribute("target", "_blank");

    const links = document.querySelectorAll("nav#link-list a");
    links.forEach(
        link => {
            let inner = link.innerHTML;
            if (inner.includes("outer-link")) {
                link.addEventListener("click", setOuter(link));
                inner = "<strong>" + inner + "</strong>";
                link.innerHTML = inner;
            }
        }
    )

    const nav = document.querySelector("nav#link-list");
    nav.setAttribute(
      "style",
      "display: flex; flex-direction: column; width: 30%; margin: 0px auto; border: 1px solid blue; padding: 16px"
    );

}

    // <nav id="link-list">
    //   <a href="https://html.com/">HTML-link</a>
    //   <a href="https://css-tricks.com/">CSS-link</a>
    //   <a href="https://www.javascript.com/">JS-outer-link</a>
    //   <a href="https://getbootstrap.com/">Bootsrape-link</a>
    //   <a href="https://angular.io/">Angular-outer-link</a>
    // </nav>;

export { changeOuterLinks };