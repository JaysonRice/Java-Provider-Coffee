import Equipment from "./Equipment.js";
import { useEquipment } from "./equipmentDataProvider.js";

const EquipmentList = () => {

    const equipmentElement = document.querySelector(".equipmentContainer")
    const equipments = useEquipment()

    let equipmentHTMLRepresentations = ""
    for (const equipmentObjects of equipments) {
        equipmentHTMLRepresentations += Equipment(equipmentObjects)
    }

    equipmentElement.innerHTML = `
        <h4 class="header">Equipment</h4>
        ${equipmentHTMLRepresentations}
`
}

export default EquipmentList