import SocialGarden from "./Social Garden"
import Content from "./Content"

const RightPanel = ({ garden }) => {
  return (
    <>
      <Content garden={garden} />

      {garden?.slug === "tshubillabong" && (
        <SocialGarden />
      )}
    </>

  )
}

export default RightPanel
