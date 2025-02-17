function createNavbar() {
    const navDiv = document.querySelector('header');
    const navBar = document.createElement('nav');
    const hButton = document.createElement('button');
    hButton.textContent = 'Home'
    navBar.appendChild(hButton);

    const mButton = document.createElement('button');
    mButton.textContent = 'Menu'
    navBar.appendChild(mButton);

    const aButton = document.createElement('button');
    aButton.textContent = 'About'
    navBar.appendChild(aButton);

    const nButton = document.createElement('button');
    nButton.textContent = 'News'
    navBar.appendChild(nButton);

    const cButton = document.createElement('button');
    cButton.textContent = 'Careers'
    navBar.appendChild(cButton);

    navDiv.appendChild(navBar);

}

export default createNavbar;
