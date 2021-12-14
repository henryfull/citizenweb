import React from "react";
import {
  Logotipo,
  Statesmen,
  Mainstreams,
  Masters,
  Cyborgs,
  Singulars,
  Influencers,
} from "./styles";

export const Map = (props) => {
  return (
    <Logotipo
      viewBox="0 0 17658 12501"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      // onMouseLeave={() => props.hoverFunction("")}
      {...props}
    >
      <Singulars
        onMouseEnter={() => props.hoverFunction("singulars")}
        onTouchStart={() => props.hoverFunction("singulars")}
        color={props.color}
        d="M8196.52 7714.67l-366.472 499.354 13.397 313.144-106.616 486.614 84.99 870.747 451.121 480.911 296.529 627.868.882 3.539-13.848 390.421-1213.51 225.419-552.37-188.396 346.661-660.142-414.663-213.002-365.508 98.249-227.198 408.222-1688.7-597.169-53.954-386.406 346.905-384.419 322.204-1172.19 1427.59-359.855 424.235-437.024 246.577-199.443 58.394-3.862 766.795-87.016 216.561 284.432z"
      />
      <Cyborgs
        onMouseEnter={() => props.hoverFunction("outsiders")}
        color={props.color}

        d="M8231.95 7726.49l44.466 58.402 935.882-111.048 766.599 266.422 594.398 570.423-180.993 739.644 184.531 246.974-2.377 638.474-81.852 338.433-510.956 317.776 9.099 336.941 444.507 396.408 205.246-163.612 328.462 459.032-224.017 299.191-350.402-244.945-923.806 12.766-481.893-252.978-382.89-631.005-.173 4.879-.882-3.539-296.529-627.868-451.12-480.911-84.991-870.747 106.616-486.614-13.397-313.144 366.472-499.354zM9552.94 5481.62h439.666l219.833 380.761-219.833 380.762H9552.94l-219.833-380.762 219.833-380.761zM13458.1 7411.31l1015.62 497.015 649.371-469.564 761.836 531.123 32.251 41.944-148.219 473.98 99.783 579.306 317.014 200.16-145.24 301.833-109.369 362.97-.78 681.904-131.079 491.708-217.346 92.582-207.424 195.012 39.038 218.084-275.717 358.094-454.151-157.876 186.937-402.172-199.431-113.172-156.87-259.686-115.999 225.369-18.542 403.035 44.23 215.729 209.663 52.458 188.099 332-231.554 233.638-573.512-158.464-111.646-202.534-719.966 158.249-305.507 206.377-636.193-82.333-208.113-415.506 264.33-1147.62-75.82-120.702 51.965 34.025-339.214-578.854 260.328-834.976 829.763-845.898 172.303-858.278 259.161-238.955z"
      />
      <Statesmen
        onMouseEnter={() => props.hoverFunction("statesmen")}
        color={props.color}

        d="M7830.61 3843.43l506.381 109.957 1076.28-353.498 372.444 257.583 311.552-148.83 973.171 460.735 592.623-377.339 588.186 383.628 324.738 841.297-203.776 647.244 1164.89 1571.64-385.414 355.365-172.303 858.278-829.763 845.897-260.328 834.976 339.214 578.855-487.861-319.439-643.488-174.953 241.278-498.278-331.544-727.049 351.479-697.13 17.405-662.112-499.249-462.337-668.659-722.579 337.569-533.487-366.33-688.932-810.153-5.759-375.822 638.653 418.787 698.578 632.652-11.53 190.725 352.199 347.888 364.268-10.821 389.649-86.201 304.786 640.369 273.769-305.608 713.651 4.472 490.469 265.532 320.842-155.866 277.28-428.403 448.568 91.422-378.003 2.377-638.474-184.53-246.974 180.992-739.645-594.398-570.422-766.599-266.422-935.882 111.048-261.027-342.834-766.795 87.016-334.423 22.118-107.81 140.082-362.5 336.691-271.564 107.909-630.674 9.952 143.77-280.489-538.761-84.373-88.52-340.564-118.637-380.688 132.65-128.123 553.248-570.365 524.721-60.048 300.967-427.852 5.911-14.709 174.41-271.114 484.465-439.164v-437.102l669.002-688.062 22.136-144.308z"
      />
      <Mainstreams
        onMouseEnter={() => props.hoverFunction("mainstreams")}
        color={props.color}

        d="M7761.23 3999.55l-669.002 688.062v437.102l-484.465 439.164-195.394 303.733-379.383 338.239-533.417 46.115-578.222 543.52-46.37-270.423-596.522-725.128-852.286-505.462-486.359 243.203 71.667 344.919 281.672 85.963 216.633-83.74 380.328 177.711-68.529-252.858 224.497 107.098-46.23 528.056-294.634-242.426v126.085l134.716 203.023-67.808 133.421 164.722 32.99-72.087 220.445-494.539-108.794-312.997 90.719-30.944-147.229 198.487-160.245 69.462-374.026-353.392-35.442-20.894-161.439-398.548-226.271-10.557-163.687-303.381-199.982-336.158 460.27-350.995 166.827-150.706 93.852-239.88-343.074-270.508-148.322 164.698-280.74 1.682-655.609 398.669-307.985-72.808-231.848 752.008-252.746 47.629-391.863 670.104 25.654 990.858-459.677 326.513-345.472 471.177-60.234 346.655-323.209 199.225 52.34 300.613-224.152 118.78 234.805 1134.42 255.784 482.356 381.813 142.745 358.657 355.439 132.757 96.522 265.049-25.265 164.707zM11177.5 1438.36l4.692 2.316 319.111-222.432 653.911 113.87 1392.84-201.261 834.867 437.293 744.159-275.712 1474.98 531.64-39.736 385.717 2.266 292.92 304.408 432.487 126.49 456.918-109.218 437.259-206.168 137.529 193.968 108.621 210.282-369.883 323.36-63.89 249.891 388.462-211.27 118.953-104.145 231.588-233.319-33.952-272.042 760.116-188.753 832.029-696.413 368.785 16.871 173.73 287.39-100.224 269.707 320.01-62.15 471.146 374.051 188.126-150.709 466.907-462.311 29.716-265.768-246.804-190.996 120.998 128.937 167.688-761.836-531.124-649.371 469.565-1015.62-497.016 126.253-116.409-1156.48-1560.3-6.742-16.651 202.107-641.941-324.738-841.297-588.186-383.628-18.987 12.089-551.282-1939.49 25.707-414.467z"
      />
      <Masters
        onMouseEnter={() => props.hoverFunction("masters")}
        color={props.color}

        d="M5841.01 464.101l498.998-260.73 811.424 9.017L7529.303 0l187.72 345.896 47.466 453.753 451.499-463.783 438.36 196.626 521.958-137.715 566.027 389.257 349.814-406.029 205.463 98.807 58.678 320.378 503.233 228.757 2.265 256.087 244.894 120.888-25.707 414.466 551.282 1939.49-573.636 365.25-973.171-460.735-311.552 148.83-372.444-257.583-1076.28 353.498-506.381-109.957 3.129-20.399-96.522-265.049-355.439-132.757-142.745-358.657-482.356-381.813-1134.42-255.784-79.909-157.965 64.684-970.043 472.967-106.948 51.173-320.216-278.342-362.451z"
      />
      <Influencers
        onMouseEnter={() => props.hoverFunction("influencers")}
        color={props.color}

        d="M5459.66 2235.57l-38.871-76.84-300.613 224.151-199.225-52.339-346.655 323.209-471.177 60.234-313.593 331.802-135.254-37.652-1022.62 310.11-42.683-299.127-435.815-545.031-351.033 265.297 36.79 274.5-149.246 159.517-181.457-104.063 4.091 304.25-313.46 353.486-197.232 380.632-282.037 186.085 77.47 237.523-168.1 302.581-586.071-66.622-42.876-653.05 438.52-335.036-141.721-501.804 820.255-948.025 132.825-538.369 341.961-117.229 207.952-527.623 251.532-369.659 435.781 200.404 389.148-318.181 256.804-210.042 386.231 108.931-247.175 294.47 62.309 315.526-123.612 367.145 183.22 426.788 314.275-329.75 245.502 289.252 56.348-466.016 321.839-219.93 344.317-79.407 150.439-224.283 91.292-529.766 912.716 268.059-68.404-189.695 7.791-4.071 278.343 362.451-51.173 320.216-472.967 106.948-64.684 970.043z"
      />
    </Logotipo>
  );
};
