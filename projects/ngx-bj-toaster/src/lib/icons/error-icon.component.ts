import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast-error-icon',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30"
      height="30"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="SVGID_1__olDsW0G3zz22_gr1"
        x1="37.227"
        x2="10.773"
        y1="10.773"
        y2="37.227"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".014" stop-color="#fe6d60"></stop>
        <stop offset=".046" stop-color="#fe766a"></stop>
        <stop offset=".208" stop-color="#fea097"></stop>
        <stop offset=".37" stop-color="#ffc2bd"></stop>
        <stop offset=".532" stop-color="#ffddda"></stop>
        <stop offset=".692" stop-color="#fff0ee"></stop>
        <stop offset=".849" stop-color="#fffbfb"></stop>
        <stop offset="1" stop-color="#fff"></stop>
      </linearGradient>
      <circle
        cx="24"
        cy="24"
        r="18.707"
        fill="url(#SVGID_1__olDsW0G3zz22_gr1)"
      ></circle>
      <path
        fill="none"
        stroke="#e02f24"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="3"
        d="M35.401,38.773C32.248,41.21,28.293,42.66,24,42.66C13.695,42.66,5.34,34.305,5.34,24	c0-2.648,0.551-5.167,1.546-7.448"
      ></path>
      <path
        fill="none"
        stroke="#e02f24"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="3"
        d="M12.077,9.646C15.31,6.957,19.466,5.34,24,5.34c10.305,0,18.66,8.354,18.66,18.66	c0,2.309-0.419,4.52-1.186,6.561"
      ></path>
      <line
        x1="31.105"
        x2="16.895"
        y1="16.895"
        y2="31.105"
        fill="none"
        stroke="#e02f24"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="3"
      ></line>
      <line
        x1="31.105"
        x2="16.895"
        y1="31.105"
        y2="16.895"
        fill="none"
        stroke="#e02f24"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="3"
      ></line>
    </svg>
  `,
})
export class ToastErrorIcon {}
