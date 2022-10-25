import SocialGarden from "./Social Garden"
import GardenContent from "./GardenContent"

const RightPanel = ({ garden }) => {
  return (
    <>
      <GardenContent garden={garden} />

      {garden?.slug === "tshubillabong" && (
        <SocialGarden />
      )}
    </>

  )
}

export default RightPanel
