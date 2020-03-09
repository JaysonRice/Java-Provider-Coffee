const Equipment = (equipment) => {
    return `
        <div class="equipment">
            <div class="equipment__model">${equipment.model}</div>
            <div class="equipment__serial__number">Serial Number: ${equipment.serialNumber}</div>
            <div class="equipment__functional">Functioning: ${equipment.isFunctional ? "Yes" : "No"}</div>
            <div class="equipment__under__warranty">Under Warranty: ${equipment.isUnderWarranty ? "✅" : "❌"}</div>
        </div>
        `
    }

export default Equipment