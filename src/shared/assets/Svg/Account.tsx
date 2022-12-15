import React from "react"
import { IconI } from "./IconInterface"

const Account: React.FC<IconI> = ({className = ''}) => {
  return ( 
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3.125C7.59063 3.125 5.625 5.09063 5.625 7.5C5.625 9.00625 6.39375 10.3438 7.55875 11.1331C5.32938 12.0894 3.75 14.3019 3.75 16.875H5C5 14.1062 7.23125 11.875 10 11.875C12.7688 11.875 15 14.1062 15 16.875H16.25C16.25 14.3019 14.6706 12.09 12.4412 11.1325C13.0358 10.7311 13.523 10.1901 13.8601 9.55687C14.1972 8.92361 14.374 8.21739 14.375 7.5C14.375 5.09063 12.4094 3.125 10 3.125ZM10 4.375C11.7331 4.375 13.125 5.76688 13.125 7.5C13.125 9.23313 11.7331 10.625 10 10.625C8.26687 10.625 6.875 9.23313 6.875 7.5C6.875 5.76688 8.26687 4.375 10 4.375Z" fill="#131814"/>
  </svg>
  )
}

export default Account