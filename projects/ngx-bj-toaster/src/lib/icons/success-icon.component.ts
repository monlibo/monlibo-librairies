import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast-success-icon',
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
        id="SVGID_1__mlGFFVpf8RJs_gr1"
        x1="33.252"
        x2="14.748"
        y1="7.976"
        y2="40.024"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#60fea4"></stop>
        <stop offset=".033" stop-color="#6afeaa"></stop>
        <stop offset=".197" stop-color="#97fec4"></stop>
        <stop offset=".362" stop-color="#bdffd9"></stop>
        <stop offset=".525" stop-color="#daffea"></stop>
        <stop offset=".687" stop-color="#eefff5"></stop>
        <stop offset=".846" stop-color="#fbfffd"></stop>
        <stop offset="1" stop-color="#fff"></stop>
      </linearGradient>
      <circle
        cx="24"
        cy="24"
        r="18.5"
        fill="url(#SVGID_1__mlGFFVpf8RJs_gr1)"
      ></circle>
      <path
        fill="none"
        stroke="#10e36c"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        d="M34.282,39.382C31.342,41.351,27.805,42.5,24,42.5C13.783,42.5,5.5,34.217,5.5,24	c0-4.423,1.552-8.484,4.142-11.667"
      ></path>
      <path
        fill="none"
        stroke="#10e36c"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        d="M20.103,5.911C21.359,5.642,22.663,5.5,24,5.5c10.217,0,18.5,8.283,18.5,18.5c0,2.864-0.651,5.576-1.813,7.996"
      ></path>
      <polyline
        fill="none"
        stroke="#10e36c"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        points="16.5,24.5 21.5,29.5 31.5,19.5"
      ></polyline>
    </svg>
  `,
})
export class ToastSuccessIcon {}
