import React from 'react';

export const IconLogo = (
  <svg width="72px" height="18px" viewBox="0 0 72 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Symbols" stroke="none" strokeWidth={1} fillRule="evenodd" fontFamily="HelveticaNeue-Thin, Helvetica Neue" fontSize={24} fontWeight={300}>
      <g id="PANDA" transform="translate(-1.000000, -5.000000)">
        <text>
          <tspan x={0} y={23}>PANDA</tspan>
        </text>
      </g>
    </g>
  </svg>
);

export const IconSearch = (
  <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Symbols" stroke="none" strokeWidth={1} fillRule="evenodd">
      <g id="Icon/SearchIcon" fillRule="nonzero">
        <g id="SearchIcon">
          <path d="M12.5,11 L11.7,11 L11.4,10.7 C12.4,9.6 13,8.1 13,6.5 C13,2.9 10.1,0 6.5,0 C2.9,0 0,2.9 0,6.5 C0,10.1 2.9,13 6.5,13 C8.1,13 9.6,12.4 10.7,11.4 L11,11.7 L11,12.5 L16,17.5 L17.5,16 L12.5,11 Z M6.5,11 C4,11 2,9 2,6.5 C2,4 4,2 6.5,2 C9,2 11,4 11,6.5 C11,9 9,11 6.5,11 Z" id="Shape" />
        </g>
      </g>
    </g>
  </svg>
);

export const IconBag = (
  <svg width="18px" height="22px" viewBox="0 0 18 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Symbols" stroke="none" strokeWidth={1} fillRule="evenodd">
      <g id="AppBar" transform="translate(-984.000000, -11.000000)">
        <g id="Icon/CartIcon">
          <g transform="translate(984.000000, 11.000000)">
            <g id="cart">
              <path d="M16,6 L16,20 L2,20 L2,6 L16,6 Z M16,4 L2,4 C0.9,4 0,4.9 0,6 L0,20 C0,21.1 0.9,22 2,22 L16,22 C17.1,22 18,21.1 18,20 L18,6 C18,4.9 17.1,4 16,4 Z" id="Shape" fillRule="nonzero" />
              <path d="M11,0 L13,0 C13,2.209139 11.209139,4 9,4 C6.790861,4 5,2.209139 5,0 L7,0 C7,1.1045695 7.8954305,2 9,2 C10.1045695,2 11,1.1045695 11,0 Z" id="Combined-Shape" transform="translate(9.000000, 2.000000) rotate(180.000000) translate(-9.000000, -2.000000) " />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const IconHamburger = (props) => {
  return (
    <label className={props.className} htmlFor="ac-gn-menustate" aria-hidden="true">
      <span className="app-hamburger__bread app-hamburger__bread_top">
        <span className="app-hamburger-crust app-hamburger-crust_top" />
      </span>
      <span className="app-hamburger__bread app-hamburger__bread_bottom">
        <span className="app-hamburger-crust app-hamburger-crust_bottom" />
      </span>
    </label>
  );
};