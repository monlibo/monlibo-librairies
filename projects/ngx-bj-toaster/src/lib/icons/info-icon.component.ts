import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast-info-icon',
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
        id="SVGID_1__uhrsa2cyqq7K_gr1"
        x1="37.081"
        x2="10.918"
        y1="10.918"
        y2="37.081"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#60affe"></stop>
        <stop offset=".033" stop-color="#6ab4fe"></stop>
        <stop offset=".197" stop-color="#97cbfe"></stop>
        <stop offset=".362" stop-color="#bddeff"></stop>
        <stop offset=".525" stop-color="#daecff"></stop>
        <stop offset=".687" stop-color="#eef7ff"></stop>
        <stop offset=".846" stop-color="#fbfdff"></stop>
        <stop offset="1" stop-color="#fff"></stop>
      </linearGradient>
      <circle
        cx="24"
        cy="24"
        r="18.5"
        fill="url(#SVGID_1__uhrsa2cyqq7K_gr1)"
      ></circle>
      <path
        fill="none"
        stroke="#2e9bfe"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="3"
        d="M31.415,40.954C29.145,41.948,26.637,42.5,24,42.5C13.783,42.5,5.5,34.217,5.5,24	c0-4.481,1.593-8.59,4.244-11.791"
      ></path>
      <path
        fill="none"
        stroke="#2e9bfe"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="3"
        d="M16.288,7.179C18.635,6.101,21.248,5.5,24,5.5c10.217,0,18.5,8.283,18.5,18.5c0,4.001-1.27,7.705-3.429,10.732"
      ></path>
      <circle cx="24" cy="16" r="2" fill="#2e9bfe"></circle>
      <line
        x1="24"
        x2="24"
        y1="22.5"
        y2="33.5"
        fill="none"
        stroke="#2e9bfe"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="3"
      ></line>
    </svg>
  `,
})
export class ToastInfoIcon {}
