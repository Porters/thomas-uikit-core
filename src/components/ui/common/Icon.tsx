import React from 'react'

export type IconName =
  | 'filter'
  | 'search'
  | 'add'
  | 'edit'
  | 'delete'
  | 'close'
  | 'check'
  | 'arrow-down'
  | 'arrow-up'
  | 'arrow-left'
  | 'pause'
  | 'download'
  | 'arrow-down-select'
  | 'home'
  | 'list'
  | 'file'
  | 'task'
  | 'company'
  | 'notification'
  | 'user'

interface IconProps {
  name: IconName
  size?: number
  className?: string
  color?: string
}

const icons: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  company: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_29345_12597)">
        <path
          d="M2.5 17.5H17.5"
          stroke="#3B5AF7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.16675 17.5V5.83333L10.8334 2.5V17.5"
          stroke="#3B5AF7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8333 17.4999V9.16659L10.8333 5.83325"
          stroke="#3B5AF7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 7.5V7.50833"
          stroke="#3B5AF7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 10V10.0083"
          stroke="#3B5AF7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 12.5V12.5083"
          stroke="#3B5AF7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 15V15.0083"
          stroke="#3B5AF7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_29345_12597">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  notification: (props) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.3335 6.16667C10.3335 5.72464 10.5091 5.30072 10.8217 4.98816C11.1342 4.67559 11.5581 4.5 12.0002 4.5C12.4422 4.5 12.8661 4.67559 13.1787 4.98816C13.4912 5.30072 13.6668 5.72464 13.6668 6.16667C14.6238 6.61919 15.4397 7.32361 16.0269 8.20442C16.6141 9.08523 16.9505 10.1092 17.0002 11.1667V13.6667C17.0629 14.1848 17.2464 14.6809 17.5358 15.1151C17.8253 15.5493 18.2127 15.9095 18.6668 16.1667H5.3335C5.78761 15.9095 6.175 15.5493 6.46449 15.1151C6.75397 14.6809 6.93745 14.1848 7.00016 13.6667V11.1667C7.0498 10.1092 7.38625 9.08523 7.97345 8.20442C8.56066 7.32361 9.37649 6.61919 10.3335 6.16667Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 16.1667V17C9.5 17.6631 9.76339 18.2989 10.2322 18.7678C10.7011 19.2366 11.337 19.5 12 19.5C12.663 19.5 13.2989 19.2366 13.7678 18.7678C14.2366 18.2989 14.5 17.6631 14.5 17V16.1667"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  user: (props) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_15856_33162)">
        <path
          d="M8.6665 8.00002C8.6665 8.88408 9.01769 9.73192 9.64281 10.357C10.2679 10.9822 11.1158 11.3334 11.9998 11.3334C12.8839 11.3334 13.7317 10.9822 14.3569 10.357C14.982 9.73192 15.3332 8.88408 15.3332 8.00002C15.3332 7.11597 14.982 6.26812 14.3569 5.643C13.7317 5.01788 12.8839 4.66669 11.9998 4.66669C11.1158 4.66669 10.2679 5.01788 9.64281 5.643C9.01769 6.26812 8.6665 7.11597 8.6665 8.00002Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 19.3333V17.6666C7 16.7826 7.35119 15.9347 7.97631 15.3096C8.60143 14.6845 9.44928 14.3333 10.3333 14.3333H13.6667C14.5507 14.3333 15.3986 14.6845 16.0237 15.3096C16.6488 15.9347 17 16.7826 17 17.6666V19.3333"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_15856_33162">
          <rect width="24" height="24" rx="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  home: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_29149_9500)">
        <path
          d="M4.16667 10H2.5L10 2.5L17.5 10H15.8333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.16675 10V15.8333C4.16675 16.2754 4.34234 16.6993 4.6549 17.0118C4.96746 17.3244 5.39139 17.5 5.83341 17.5H14.1667C14.6088 17.5 15.0327 17.3244 15.3453 17.0118C15.6578 16.6993 15.8334 16.2754 15.8334 15.8333V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 17.4999V12.4999C7.5 12.0579 7.6756 11.634 7.98816 11.3214C8.30072 11.0088 8.72464 10.8333 9.16667 10.8333H10.8333C11.2754 10.8333 11.6993 11.0088 12.0118 11.3214C12.3244 11.634 12.5 12.0579 12.5 12.4999V17.4999"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_29149_9500">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  list: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_29149_9508)">
        <path
          d="M11.6665 2.5V5.83333C11.6665 6.05435 11.7543 6.26631 11.9106 6.42259C12.0669 6.57887 12.2788 6.66667 12.4998 6.66667H15.8332"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1665 17.5H5.83317C5.39114 17.5 4.96722 17.3244 4.65466 17.0118C4.3421 16.6993 4.1665 16.2754 4.1665 15.8333V4.16667C4.1665 3.72464 4.3421 3.30072 4.65466 2.98816C4.96722 2.67559 5.39114 2.5 5.83317 2.5H11.6665L15.8332 6.66667V15.8333C15.8332 16.2754 15.6576 16.6993 15.345 17.0118C15.0325 17.3244 14.6085 17.5 14.1665 17.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 7.5H8.33333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 10.8333H12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 14.1667H12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_29149_9508">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  file: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_29149_1912)">
        <path
          d="M11.25 15.8333H4.16667C3.72464 15.8333 3.30072 15.6577 2.98816 15.3451C2.67559 15.0325 2.5 14.6086 2.5 14.1666V4.99992C2.5 4.55789 2.67559 4.13397 2.98816 3.82141C3.30072 3.50885 3.72464 3.33325 4.16667 3.33325H7.5L10 5.83325H15.8333C16.2754 5.83325 16.6993 6.00885 17.0118 6.32141C17.3244 6.63397 17.5 7.05789 17.5 7.49992V8.74992"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5001 12.5H15.4167C15.0852 12.5 14.7673 12.6317 14.5329 12.8661C14.2984 13.1005 14.1667 13.4185 14.1667 13.75C14.1667 14.0815 14.2984 14.3995 14.5329 14.6339C14.7673 14.8683 15.0852 15 15.4167 15H16.2501C16.5816 15 16.8995 15.1317 17.134 15.3661C17.3684 15.6005 17.5001 15.9185 17.5001 16.25C17.5001 16.5815 17.3684 16.8995 17.134 17.1339C16.8995 17.3683 16.5816 17.5 16.2501 17.5H14.1667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8333 17.5001V18.3334M15.8333 11.6667V12.5001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_29149_1912">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  task: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_29149_8563)">
        <path
          d="M6.66667 17.5001H5C4.33696 17.5001 3.70107 17.2367 3.23223 16.7678C2.76339 16.299 2.5 15.6631 2.5 15.0001V14.1667H7.08333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1667 7.08333V4.16667C14.1667 3.83703 14.2645 3.5148 14.4476 3.24072C14.6308 2.96664 14.8911 2.75301 15.1956 2.62687C15.5002 2.50072 15.8353 2.46772 16.1586 2.53203C16.4819 2.59633 16.7788 2.75507 17.0119 2.98816C17.245 3.22124 17.4037 3.51822 17.4681 3.84152C17.5324 4.16482 17.4994 4.49993 17.3732 4.80447C17.2471 5.10902 17.0334 5.36931 16.7594 5.55245C16.4853 5.73559 16.1631 5.83333 15.8334 5.83333H14.1667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8334 2.5H6.66675C6.00371 2.5 5.36782 2.76339 4.89898 3.23223C4.43014 3.70107 4.16675 4.33696 4.16675 5V14.1667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 5.83325H10.8333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 9.16675H10.8333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.35 10.5084C15.6782 10.1802 16.1233 9.99585 16.5875 9.99585C17.0517 9.99585 17.4968 10.1802 17.825 10.5084C18.1532 10.8366 18.3376 11.2818 18.3376 11.7459C18.3376 12.2101 18.1532 12.6552 17.825 12.9834L12.5 18.3334H10V15.8334L15.35 10.5084Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_29149_8563">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  filter: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.16699 2.6665C2.16699 2.39036 2.39085 2.1665 2.66699 2.1665H13.3337C13.6098 2.1665 13.8337 2.39036 13.8337 2.6665V4.1145C13.8336 4.60067 13.6404 5.06699 13.2965 5.41072C13.2965 5.41074 13.2966 5.41071 13.2965 5.41072L10.5003 8.20694V12.6665C10.5003 12.8817 10.3626 13.0728 10.1584 13.1408L6.15844 14.4742C6.00597 14.525 5.83835 14.4994 5.70797 14.4055C5.57759 14.3115 5.50033 14.1606 5.50033 13.9998V8.52647L2.64369 5.38417C2.33702 5.04677 2.16704 4.60717 2.16699 4.15122V2.6665ZM3.16699 3.1665V4.15112C3.16699 4.15114 3.16699 4.1511 3.16699 4.15112C3.16703 4.35833 3.24426 4.55815 3.38363 4.7115C3.38364 4.71151 3.38362 4.71149 3.38363 4.7115L6.3703 7.99683C6.45396 8.08887 6.50033 8.20879 6.50033 8.33317V13.3061L9.50033 12.3061V7.99984C9.50033 7.86723 9.553 7.74005 9.64677 7.64628L12.5894 4.70362C12.7457 4.5474 12.8336 4.33546 12.8337 4.1145C12.8337 4.11447 12.8337 4.11454 12.8337 4.1145V3.1665H3.16699Z"
        fill="currentColor"
      />
    </svg>
  ),
  search: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M10.5 10.5L14 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  add: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M8 3V13M3 8H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  edit: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      {...props}
    >
      <path
        d="M13.0491 5.92764C13.3112 5.66556 13.4585 5.31007 13.4586 4.93937C13.4586 4.56868 13.3114 4.21315 13.0493 3.951C12.7872 3.68885 12.4317 3.54155 12.061 3.5415C11.6904 3.54146 11.3348 3.68867 11.0727 3.95076L4.45528 10.5696C4.34016 10.6844 4.25502 10.8257 4.20737 10.9812L3.55237 13.139C3.53956 13.1819 3.53859 13.2275 3.54957 13.2709C3.56055 13.3142 3.58307 13.3539 3.61475 13.3855C3.64642 13.4171 3.68606 13.4396 3.72946 13.4505C3.77287 13.4614 3.81842 13.4603 3.86128 13.4475L6.01964 12.793C6.17492 12.7457 6.31623 12.6611 6.43118 12.5465L13.0491 5.92764Z"
        stroke="#414143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.9873 5.0293L11.9706 7.01263"
        stroke="#414143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  delete: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      {...props}
    >
      <path
        d="M3.40039 5.19434H13.6004"
        stroke="#414143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.22461 7.83887V11.8055"
        stroke="#414143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.77441 7.83887V11.8055"
        stroke="#414143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.03711 5.19434L4.67461 13.1277C4.67461 13.4784 4.80894 13.8147 5.04805 14.0627C5.28716 14.3106 5.61146 14.4499 5.94961 14.4499H11.0496C11.3878 14.4499 11.7121 14.3106 11.9512 14.0627C12.1903 13.8147 12.3246 13.4784 12.3246 13.1277L12.9621 5.19434"
        stroke="#414143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.58691 5.19426V3.21092C6.58691 3.03558 6.65408 2.86742 6.77363 2.74344C6.89319 2.61946 7.05534 2.5498 7.22441 2.5498H9.77441C9.94349 2.5498 10.1056 2.61946 10.2252 2.74344C10.3447 2.86742 10.4119 3.03558 10.4119 3.21092V5.19426"
        stroke="#414143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  close: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M4 4L12 12M12 4L4 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  check: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M3 8L6 11L13 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
  'arrow-down': (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
  'arrow-up': (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M4 10L8 6L12 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
  'arrow-left': (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_20456_23073)">
        <path
          d="M3.33325 8H12.6666"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33325 8H12.6666"
          stroke="black"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33325 8L7.33325 12"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33325 8L7.33325 12"
          stroke="black"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33325 8L7.33325 4"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33325 8L7.33325 4"
          stroke="black"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_20456_23073">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  'arrow-down-select': (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="5"
      viewBox="0 0 9 5"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.146447 0.146447C0.341709 -0.0488155 0.658291 -0.0488155 0.853553 0.146447L4.5 3.79289L8.14645 0.146447C8.34171 -0.0488155 8.65829 -0.0488155 8.85355 0.146447C9.04882 0.341709 9.04882 0.658291 8.85355 0.853553L4.85355 4.85355C4.65829 5.04882 4.34171 5.04882 4.14645 4.85355L0.146447 0.853553C-0.0488155 0.658291 -0.0488155 0.341709 0.146447 0.146447Z"
        fill="#414143"
      />
    </svg>
  ),
  pause: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M11.1997 3.2002H9.59974C9.30519 3.2002 9.06641 3.43898 9.06641 3.73353V12.2669C9.06641 12.5614 9.30519 12.8002 9.59974 12.8002H11.1997C11.4943 12.8002 11.7331 12.5614 11.7331 12.2669V3.73353C11.7331 3.43898 11.4943 3.2002 11.1997 3.2002Z"
        stroke="#414143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.39994 3.2002H4.79993C4.50538 3.2002 4.2666 3.43898 4.2666 3.73353V12.2669C4.2666 12.5614 4.50538 12.8002 4.79993 12.8002H6.39994C6.69449 12.8002 6.93327 12.5614 6.93327 12.2669V3.73353C6.93327 3.43898 6.69449 3.2002 6.39994 3.2002Z"
        stroke="#414143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  download: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_29149_6026)">
        <path
          d="M3.33325 14.1667V15.8334C3.33325 16.2754 3.50885 16.6994 3.82141 17.0119C4.13397 17.3245 4.55789 17.5001 4.99992 17.5001H14.9999C15.4419 17.5001 15.8659 17.3245 16.1784 17.0119C16.491 16.6994 16.6666 16.2754 16.6666 15.8334V14.1667"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83325 9.16675L9.99992 13.3334L14.1666 9.16675"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10 3.33325V13.3333" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_29149_6026">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
}

export const Icon: React.FC<IconProps> = ({ name, size = 16, className = '', color }) => {
  const IconComponent = icons[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return (
    <IconComponent
      width={size}
      height={size}
      className={className}
      style={{
        minWidth: size,
        minHeight: size,
        ...(color ? { color } : {}),
      }}
    />
  )
}
