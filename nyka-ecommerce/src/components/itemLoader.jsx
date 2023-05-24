import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={3}
    width={320}
    height={430}
    backgroundColor="#f3f3f3"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect  width="320" height="430" rx="16" ry="16"  /> 
  </ContentLoader>
)

export default MyLoader