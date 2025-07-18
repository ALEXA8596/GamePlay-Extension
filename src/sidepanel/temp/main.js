let savedUrl = null;
let facilityId = null;
let facilityData = null;

const sportsData = [
  {
    facilityType: "elementary",
    fieldType: "baseball",
    dimensions: {
      length: 210,
      width: 135,
      baseballLength: 225,
      baseballWidth: 275,
    },
    compatibleSports: [
      {
        name: "Baseball",
        ageGroup: "12U",
        priority: "primary",
        id: 8,
        sportsAgeId: 4,
      },
      {
        name: "Softball",
        ageGroup: "18U",
        priority: "primary",
        id: 80,
        sportsAgeId: 7,
      },
      {
        name: "Soccer",
        ageGroup: "12U",
        priority: "secondary",
        id: 79,
        sportsAgeId: 4,
      },
      {
        name: "Rugby",
        ageGroup: "12U",
        priority: "secondary",
        id: 73,
        sportsAgeId: 4,
      },
      {
        name: "Football",
        ageGroup: "12U",
        priority: "secondary",
        id: 37,
        sportsAgeId: 4,
      },
      {
        name: "Field Hockey",
        ageGroup: "12U",
        priority: "secondary",
        id: 31,
        sportsAgeId: 4,
      },
      {
        name: "Ultimate",
        ageGroup: "12U",
        priority: "secondary",
        id: 89,
        sportsAgeId: 4,
      },
      {
        name: "Lacrosse",
        ageGroup: "12U",
        priority: "secondary",
        id: 54,
        sportsAgeId: 4,
      },
    ],
  },
  {
    facilityType: "middle",
    fieldType: "baseball",
    dimensions: {
      length: 210,
      width: 135,
      baseballLength: 300,
      baseballWidth: 360,
    },
    compatibleSports: [
      {
        name: "Baseball",
        ageGroup: "14U",
        priority: "primary",
        id: 8,
        sportsAgeId: 5,
      },
      {
        name: "Softball",
        ageGroup: "18U",
        priority: "primary",
        id: 80,
        sportsAgeId: 7,
      },
      {
        name: "Soccer",
        ageGroup: "12U",
        priority: "secondary",
        id: 79,
        sportsAgeId: 4,
      },
      {
        name: "Rugby",
        ageGroup: "12U",
        priority: "secondary",
        id: 73,
        sportsAgeId: 4,
      },
      {
        name: "Football",
        ageGroup: "12U",
        priority: "secondary",
        id: 37,
        sportsAgeId: 4,
      },
      {
        name: "Field Hockey",
        ageGroup: "12U",
        priority: "secondary",
        id: 31,
        sportsAgeId: 4,
      },
      {
        name: "Ultimate",
        ageGroup: "12U",
        priority: "secondary",
        id: 89,
        sportsAgeId: 4,
      },
      {
        name: "Lacrosse",
        ageGroup: "12U",
        priority: "secondary",
        id: 54,
        sportsAgeId: 4,
      },
    ],
  },
  {
    facilityType: "high",
    fieldType: "baseball",
    dimensions: {
      length: 210,
      width: 135,
      baseballLength: 330,
      baseballWidth: 390,
    },
    compatibleSports: [
      {
        name: "Baseball",
        ageGroup: "18U",
        priority: "primary",
        id: 8,
        sportsAgeId: 7,
      },
      {
        name: "Softball",
        ageGroup: "18U",
        priority: "primary",
        id: 80,
        sportsAgeId: 7,
      },
      {
        name: "Soccer",
        ageGroup: "12U",
        priority: "secondary",
        id: 79,
        sportsAgeId: 4,
      },
      {
        name: "Rugby",
        ageGroup: "12U",
        priority: "secondary",
        id: 73,
        sportsAgeId: 4,
      },
      {
        name: "Football",
        ageGroup: "12U",
        priority: "secondary",
        id: 37,
        sportsAgeId: 4,
      },
      {
        name: "Field Hockey",
        ageGroup: "12U",
        priority: "secondary",
        id: 31,
        sportsAgeId: 4,
      },
      {
        name: "Ultimate",
        ageGroup: "12U",
        priority: "secondary",
        id: 89,
        sportsAgeId: 4,
      },
      {
        name: "Lacrosse",
        ageGroup: "12U",
        priority: "secondary",
        id: 54,
        sportsAgeId: 4,
      },
    ],
  },
  {
    facilityType: "park",
    fieldType: "baseball",
    dimensions: {
      length: 210,
      width: 135,
      baseballLength: 300,
      baseballWidth: 360,
    },
    compatibleSports: [
      {
        name: "Baseball",
        ageGroup: "14U",
        priority: "primary",
        id: 8,
        sportsAgeId: 5,
      },
      {
        name: "Softball",
        ageGroup: "18U",
        priority: "primary",
        id: 80,
        sportsAgeId: 7,
      },
      {
        name: "Soccer",
        ageGroup: "12U",
        priority: "secondary",
        id: 79,
        sportsAgeId: 4,
      },
      {
        name: "Rugby",
        ageGroup: "12U",
        priority: "secondary",
        id: 73,
        sportsAgeId: 4,
      },
      {
        name: "Football",
        ageGroup: "12U",
        priority: "secondary",
        id: 37,
        sportsAgeId: 4,
      },
      {
        name: "Field Hockey",
        ageGroup: "12U",
        priority: "secondary",
        id: 31,
        sportsAgeId: 4,
      },
      {
        name: "Ultimate",
        ageGroup: "12U",
        priority: "secondary",
        id: 89,
        sportsAgeId: 4,
      },
      {
        name: "Lacrosse",
        ageGroup: "12U",
        priority: "secondary",
        id: 54,
        sportsAgeId: 4,
      },
    ],
  },
  {
    facilityType: "private",
    fieldType: "baseball",
    dimensions: {
      length: 210,
      width: 135,
      baseballLength: 225,
      baseballWidth: 275,
    },
    compatibleSports: [
      {
        name: "Baseball",
        ageGroup: "12U",
        priority: "primary",
        id: 8,
        sportsAgeId: 4,
      },
      {
        name: "Softball",
        ageGroup: "18U",
        priority: "primary",
        id: 80,
        sportsAgeId: 7,
      },
      {
        name: "Soccer",
        ageGroup: "12U",
        priority: "secondary",
        id: 79,
        sportsAgeId: 4,
      },
      {
        name: "Rugby",
        ageGroup: "12U",
        priority: "secondary",
        id: 73,
        sportsAgeId: 4,
      },
      {
        name: "Football",
        ageGroup: "12U",
        priority: "secondary",
        id: 37,
        sportsAgeId: 4,
      },
      {
        name: "Field Hockey",
        ageGroup: "12U",
        priority: "secondary",
        id: 31,
        sportsAgeId: 4,
      },
      {
        name: "Ultimate",
        ageGroup: "12U",
        priority: "secondary",
        id: 89,
        sportsAgeId: 4,
      },
      {
        name: "Lacrosse",
        ageGroup: "12U",
        priority: "secondary",
        id: 54,
        sportsAgeId: 4,
      },
    ],
  },
  {
    facilityType: "elementary",
    fieldType: "basketball",
    dimensions: { length: 74, width: 50 },
    compatibleSports: [
      {
        name: "Basketball",
        ageGroup: "12U",
        priority: "primary",
        id: 9,
        sportsAgeId: 4,
      },
    ],
  },
  {
    facilityType: "middle",
    fieldType: "basketball",
    dimensions: { length: 94, width: 50 },
    compatibleSports: [
      {
        name: "Basketball",
        ageGroup: "18U",
        priority: "primary",
        id: 9,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "high",
    fieldType: "basketball",
    dimensions: { length: 94, width: 50 },
    compatibleSports: [
      {
        name: "Basketball",
        ageGroup: "18U",
        priority: "primary",
        id: 9,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "park",
    fieldType: "basketball",
    dimensions: { length: 94, width: 50 },
    compatibleSports: [
      {
        name: "Basketball",
        ageGroup: "18U",
        priority: "primary",
        id: 9,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "private",
    fieldType: "basketball",
    dimensions: { length: 94, width: 50 },
    compatibleSports: [
      {
        name: "Basketball",
        ageGroup: "18U",
        priority: "primary",
        id: 9,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "elementary",
    fieldType: "soccer",
    dimensions: {
      length: 210,
      width: 135,
      baseballLength: 225,
      baseballWidth: 275,
    },
    compatibleSports: [
      {
        name: "Soccer",
        ageGroup: "12U",
        priority: "primary",
        id: 79,
        sportsAgeId: 4,
      },
      {
        name: "Field hockey",
        ageGroup: "12U",
        priority: "primary",
        id: 31,
        sportsAgeId: 4,
      },
      {
        name: "Lacrosse",
        ageGroup: "12U",
        priority: "primary",
        id: 54,
        sportsAgeId: 4,
      },
      {
        name: "Rugby",
        ageGroup: "12U",
        priority: "primary",
        id: 73,
        sportsAgeId: 4,
      },
      {
        name: "Ultimate Frisbee",
        ageGroup: "12U",
        priority: "primary",
        id: 89,
        sportsAgeId: 4,
      },
      {
        name: "Football",
        ageGroup: "12U",
        priority: "secondary",
        id: 37,
        sportsAgeId: 4,
      },
      {
        name: "Baseball",
        ageGroup: "12U",
        priority: "secondary",
        id: 8,
        sportsAgeId: 4,
      },
      {
        name: "Softball",
        ageGroup: "18U",
        priority: "secondary",
        id: 80,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "middle",
    fieldType: "soccer",
    dimensions: {
      length: 300,
      width: 150,
      baseballLength: 225,
      baseballWidth: 275,
    },
    compatibleSports: [
      {
        name: "Soccer",
        ageGroup: "18U",
        priority: "primary",
        id: 79,
        sportsAgeId: 7,
      },
      {
        name: "Field hockey",
        ageGroup: "18U",
        priority: "primary",
        id: 31,
        sportsAgeId: 7,
      },
      {
        name: "Lacrosse",
        ageGroup: "18U",
        priority: "primary",
        id: 54,
        sportsAgeId: 7,
      },
      {
        name: "Rugby",
        ageGroup: "18U",
        priority: "primary",
        id: 73,
        sportsAgeId: 7,
      },
      {
        name: "Ultimate Frisbee",
        ageGroup: "18U",
        priority: "primary",
        id: 89,
        sportsAgeId: 7,
      },
      {
        name: "Football",
        ageGroup: "12U",
        priority: "secondary",
        id: 37,
        sportsAgeId: 4,
      },
      {
        name: "Baseball",
        ageGroup: "12U",
        priority: "secondary",
        id: 8,
        sportsAgeId: 4,
      },
      {
        name: "Softball",
        ageGroup: "18U",
        priority: "secondary",
        id: 80,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "high",
    fieldType: "soccer",
    dimensions: {
      length: 300,
      width: 150,
      baseballLength: 225,
      baseballWidth: 275,
    },
    compatibleSports: [
      {
        name: "Soccer",
        ageGroup: "18U",
        priority: "primary",
        id: 79,
        sportsAgeId: 7,
      },
      {
        name: "Field hockey",
        ageGroup: "18U",
        priority: "primary",
        id: 31,
        sportsAgeId: 7,
      },
      {
        name: "Lacrosse",
        ageGroup: "18U",
        priority: "primary",
        id: 54,
        sportsAgeId: 7,
      },
      {
        name: "Rugby",
        ageGroup: "18U",
        priority: "primary",
        id: 73,
        sportsAgeId: 7,
      },
      {
        name: "Ultimate Frisbee",
        ageGroup: "18U",
        priority: "primary",
        id: 89,
        sportsAgeId: 7,
      },
      {
        name: "Football",
        ageGroup: "12U",
        priority: "secondary",
        id: 37,
        sportsAgeId: 4,
      },
      {
        name: "Baseball",
        ageGroup: "12U",
        priority: "secondary",
        id: 8,
        sportsAgeId: 4,
      },
      {
        name: "Softball",
        ageGroup: "18U",
        priority: "secondary",
        id: 80,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "park",
    fieldType: "soccer",
    dimensions: {
      length: 300,
      width: 150,
      baseballLength: 225,
      baseballWidth: 275,
    },
    compatibleSports: [
      {
        name: "Soccer",
        ageGroup: "18U",
        priority: "primary",
        id: 79,
        sportsAgeId: 7,
      },
      {
        name: "Field hockey",
        ageGroup: "18U",
        priority: "primary",
        id: 31,
        sportsAgeId: 7,
      },
      {
        name: "Lacrosse",
        ageGroup: "18U",
        priority: "primary",
        id: 54,
        sportsAgeId: 7,
      },
      {
        name: "Rugby",
        ageGroup: "18U",
        priority: "primary",
        id: 73,
        sportsAgeId: 7,
      },
      {
        name: "Ultimate Frisbee",
        ageGroup: "18U",
        priority: "primary",
        id: 89,
        sportsAgeId: 7,
      },
      {
        name: "Football",
        ageGroup: "12U",
        priority: "secondary",
        id: 37,
        sportsAgeId: 4,
      },
      {
        name: "Baseball",
        ageGroup: "12U",
        priority: "secondary",
        id: 8,
        sportsAgeId: 4,
      },
      {
        name: "Softball",
        ageGroup: "18U",
        priority: "secondary",
        id: 80,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "private",
    fieldType: "soccer",
    dimensions: {
      length: 300,
      width: 150,
      baseballLength: 225,
      baseballWidth: 275,
    },
    compatibleSports: [
      {
        name: "Soccer",
        ageGroup: "18U",
        priority: "primary",
        id: 79,
        sportsAgeId: 7,
      },
      {
        name: "Field hockey",
        ageGroup: "18U",
        priority: "primary",
        id: 31,
        sportsAgeId: 7,
      },
      {
        name: "Lacrosse",
        ageGroup: "18U",
        priority: "primary",
        id: 54,
        sportsAgeId: 7,
      },
      {
        name: "Rugby",
        ageGroup: "18U",
        priority: "primary",
        id: 73,
        sportsAgeId: 7,
      },
      {
        name: "Ultimate Frisbee",
        ageGroup: "18U",
        priority: "primary",
        id: 89,
        sportsAgeId: 7,
      },
      {
        name: "Football",
        ageGroup: "12U",
        priority: "secondary",
        id: 37,
        sportsAgeId: 4,
      },
      {
        name: "Baseball",
        ageGroup: "12U",
        priority: "secondary",
        id: 8,
        sportsAgeId: 4,
      },
      {
        name: "Softball",
        ageGroup: "18U",
        priority: "secondary",
        id: 80,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "elementary",
    fieldType: "tennis",
    dimensions: { length: 78, width: 36 },
    compatibleSports: [
      {
        name: "Tennis",
        ageGroup: "18U",
        priority: "primary",
        id: 87,
        sportsAgeId: 7,
      },
      {
        name: "Pickleball",
        ageGroup: "18U",
        priority: "primary",
        id: 63,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "middle",
    fieldType: "tennis",
    dimensions: { length: 78, width: 36 },
    compatibleSports: [
      {
        name: "Tennis",
        ageGroup: "18U",
        priority: "primary",
        id: 87,
        sportsAgeId: 7,
      },
      {
        name: "Pickleball",
        ageGroup: "18U",
        priority: "primary",
        id: 63,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "high",
    fieldType: "tennis",
    dimensions: { length: 78, width: 36 },
    compatibleSports: [
      {
        name: "Tennis",
        ageGroup: "18U",
        priority: "primary",
        id: 87,
        sportsAgeId: 7,
      },
      {
        name: "Pickleball",
        ageGroup: "18U",
        priority: "primary",
        id: 63,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "park",
    fieldType: "tennis",
    dimensions: { length: 78, width: 36 },
    compatibleSports: [
      {
        name: "Tennis",
        ageGroup: "18U",
        priority: "primary",
        id: 87,
        sportsAgeId: 7,
      },
      {
        name: "Pickleball",
        ageGroup: "18U",
        priority: "primary",
        id: 63,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "private",
    fieldType: "tennis",
    dimensions: { length: 78, width: 36 },
    compatibleSports: [
      {
        name: "Tennis",
        ageGroup: "18U",
        priority: "primary",
        id: 87,
        sportsAgeId: 7,
      },
      {
        name: "Pickleball",
        ageGroup: "18U",
        priority: "primary",
        id: 63,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "elementary",
    fieldType: "volleyball",
    dimensions: { length: 78, width: 36 },
    compatibleSports: [
      {
        name: "Volleyball",
        ageGroup: "12U",
        priority: "primary",
        id: 90,
        sportsAgeId: 4,
      },
    ],
  },
  {
    facilityType: "middle",
    fieldType: "volleyball",
    dimensions: { length: 78, width: 36 },
    compatibleSports: [
      {
        name: "Volleyball",
        ageGroup: "14U",
        priority: "primary",
        id: 90,
        sportsAgeId: 5,
      },
    ],
  },
  {
    facilityType: "high",
    fieldType: "volleyball",
    dimensions: { length: 78, width: 36 },
    compatibleSports: [
      {
        name: "Volleyball",
        ageGroup: "18U",
        priority: "primary",
        id: 90,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "park",
    fieldType: "volleyball",
    dimensions: { length: 78, width: 36 },
    compatibleSports: [
      {
        name: "Volleyball",
        ageGroup: "18U",
        priority: "primary",
        id: 90,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "elementary",
    fieldType: "gym",
    dimensions: { length: 94, width: 50 },
    compatibleSports: [
      {
        name: "Basketball",
        ageGroup: "12U",
        priority: "primary",
        id: 9,
        sportsAgeId: 4,
      },
      {
        name: "Volleyball",
        ageGroup: "12U",
        priority: "primary",
        id: 90,
        sportsAgeId: 4,
      },
    ],
  },
  {
    facilityType: "middle",
    fieldType: "gym",
    dimensions: { length: 94, width: 50 },
    compatibleSports: [
      {
        name: "Basketball",
        ageGroup: "18U",
        priority: "primary",
        id: 9,
        sportsAgeId: 7,
      },
      {
        name: "Volleyball",
        ageGroup: "18U",
        priority: "primary",
        id: 90,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "high",
    fieldType: "gym",
    dimensions: { length: 94, width: 50 },
    compatibleSports: [
      {
        name: "Basketball",
        ageGroup: "18U",
        priority: "primary",
        id: 9,
        sportsAgeId: 7,
      },
      {
        name: "Volleyball",
        ageGroup: "18U",
        priority: "primary",
        id: 90,
        sportsAgeId: 7,
      },
    ],
  },
  {
    facilityType: "private",
    fieldType: "gym",
    dimensions: { length: 94, width: 50 },
    compatibleSports: [
      {
        name: "Basketball",
        ageGroup: "18U",
        priority: "primary",
        id: 9,
        sportsAgeId: 7,
      },
      {
        name: "Volleyball",
        ageGroup: "18U",
        priority: "primary",
        id: 90,
        sportsAgeId: 7,
      },
    ],
  },
];

// async function createFieldAndAddSports(
//   facilityId,
//   facilityType,
//   fieldName,
//   fieldType
// ) {
//   try {
//     const cookies = await new Promise((resolve) => {
//       chrome.runtime.sendMessage({ action: "getCookies" }, (response) => {
//         resolve(response.cookies);
//       });
//     });
//     const response = await fetch(
//       "https://www.gameplayus.com/api/FieldsApi/AddSport",
//       {
//         headers: {
//           accept: "application/json, text/javascript, */*; q=0.01",
//           "accept-language": "en-US,en;q=0.9",
//           "content-type": "application/json; charset=UTF-8",
//           cookies: cookies
//             .map((cookie) => `${cookie.name}=${cookie.value}`)
//             .join("; "),
//         },
//         body: JSON.stringify({
//           FieldId: "",
//           SportTypeId: "",
//           ColorCOde: "",
//           SportAgeGroupId: "",
//           UsageType: "",
//         }),
//         method: "POST",
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();
//     console.log("Sport added successfully:", data);
//   } catch (error) {
//     console.error("Error adding sport:", error);
//   }
// }

// Form submission handler
document.getElementById("facility-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting normally

  console.log("Form submitted");

  // Get form values
  const facilityId = document.getElementById("facilityId").value;
  const facilityType = document.getElementById("facilityType").value;
  const fieldType = document.getElementById("fieldType").value;

  // get field name by getting the text of the selected option and spliting it by a parenthesis and getting the first value
  const fieldName = document
    .getElementById("fieldId")
    .selectedOptions[0].textContent.split("(")[0]
    .trim();
  console.log("Field Name:", fieldName);

  // Find matching sportsData object
  const matchingData = sportsData.find(
    (data) => data.facilityType === facilityType && data.fieldType === fieldType
  );

  if (matchingData) {
    // Create field object with the matching data
    const fieldObject = {
      facilityId: facilityId,
      facilityType: facilityType,
      fieldType: fieldType,
      dimensions: matchingData.dimensions,
      compatibleSports: matchingData.compatibleSports,
    };

    // Display in JSON format
    const jsonOutput = document.getElementById("json-output");
    jsonOutput.textContent = JSON.stringify(fieldObject, null, 2);

    // Display in HTML format
    const htmlOutput = document.getElementById("html-output");
    htmlOutput.innerHTML = generateFieldHTML(fieldObject);

    matchingData.compatibleSports.forEach(async (sport) => {
      const data = {
        FieldId: document.getElementById("fieldId").value,
        SportTypeId: sport.id,
        ColorCode: sport.priority === "primary" ? "green" : "yellow",
        SportAgeGroupId: sport.sportsAgeId,
        UsageType: sport.priority === "primary" ? 1 : 2,
      };
      await addSport(data);
    });
  } else {
    // Handle case where no matching data is found
    const jsonOutput = document.getElementById("json-output");
    jsonOutput.textContent =
      "No matching sports data found for this facility type and field type combination.";

    const htmlOutput = document.getElementById("html-output");
    htmlOutput.innerHTML =
      '<div class="card-body"><p class="text-danger">No matching sports data found for this facility type and field type combination.</p></div>';
  }
});

document
  .getElementById("get-facility-info-btn")
  .addEventListener("click", () => {
    chrome.runtime.sendMessage(
      { action: "getFacilityInfoFromActiveTab" },
      (response) => {
        const display = document.getElementById("dom-display");
        const output = document.getElementById("dom-output");

        if (response && !response.error) {
          // output.textContent = JSON.stringify(response, null, 2);
          output.textContent = "Success";
          display.classList.remove("d-none");
          console.log("Facility Info:", response);

          // Auto-populate facility ID if found
          if (response.facilityId) {
            document.getElementById("facilityId").value = response.facilityId;
          }

          facilityData = response;

          // Populate the field dropdown
          populateFieldDropdown(response);
        } else {
          output.textContent = `Error: ${
            response?.error || "Failed to get facility info"
          }`;
          display.classList.remove("d-none");
        }
      }
    );
  });

document.getElementById("get-json-data-btn").addEventListener("click", () => {
  chrome.runtime.sendMessage(
    { action: "getJSONDataFromActiveTab" },
    (response) => {
      const display = document.getElementById("dom-display");
      const output = document.getElementById("dom-output");
      console.log(response);
      if (response && !response.error) {
        // get the attributes from the response
        // return the first attribute
        const firstAttribute = Object.keys(response)[0];
        console.log("First Attribute:", firstAttribute);
        output.textContent = JSON.stringify(response[firstAttribute], null, 2);
        display.classList.remove("d-none");
        console.log("JSON Data:", response);
        facilityData = response[firstAttribute];
      } else {
        console.log(response);
        output.textContent = `Error: ${
          response?.error || "Failed to get JSON data"
        } + ${response}`;
        display.classList.remove("d-none");
      }
    }
  );
});

// Function to generate HTML from field object
function generateFieldHTML(fieldObject) {
  const {
    facilityId,
    fieldName,
    facilityType,
    fieldType,
    dimensions,
    compatibleSports,
  } = fieldObject;

  // Create dimensions HTML
  let dimensionsHTML = '<ul class="list-unstyled mb-0">';
  for (const [key, value] of Object.entries(dimensions)) {
    const displayKey = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
    dimensionsHTML += `<li><strong>${displayKey}:</strong> ${value} ft</li>`;
  }
  dimensionsHTML += "</ul>";

  // Create compatible sports HTML
  const primarySports = compatibleSports.filter(
    (sport) => sport.priority === "primary"
  );
  const secondarySports = compatibleSports.filter(
    (sport) => sport.priority === "secondary"
  );

  let sportsHTML = "";

  if (primarySports.length > 0) {
    sportsHTML +=
      '<div class="mb-3"><h6 class="text-success">Primary Sports:</h6><div class="row">';
    primarySports.forEach((sport) => {
      sportsHTML += `
        <div class="col-md-6 mb-2">
          <div class="card border-success">
            <div class="card-body py-2">
              <h6 class="card-title mb-1 text-success">${sport.name}</h6>
              <p class="card-text small mb-0">
                <strong>Age Group:</strong> ${sport.ageGroup}<br>
                <strong>Sport ID:</strong> ${sport.id}<br>
                <strong>Age ID:</strong> ${sport.sportsAgeId}
              </p>
            </div>
          </div>
        </div>`;
    });
    sportsHTML += "</div></div>";
  }

  if (secondarySports.length > 0) {
    sportsHTML +=
      '<div class="mb-3"><h6 class="text-warning">Secondary Sports:</h6><div class="row">';
    secondarySports.forEach((sport) => {
      sportsHTML += `
        <div class="col-md-6 mb-2">
          <div class="card border-warning">
            <div class="card-body py-2">
              <h6 class="card-title mb-1 text-warning">${sport.name}</h6>
              <p class="card-text small mb-0">
                <strong>Age Group:</strong> ${sport.ageGroup}<br>
                <strong>Sport ID:</strong> ${sport.id}<br>
                <strong>Age ID:</strong> ${sport.sportsAgeId}
              </p>
            </div>
          </div>
        </div>`;
    });
    sportsHTML += "</div></div>";
  }

  return `
    <div class="card-body">
      <h5 class="card-title text-primary">${fieldName}</h5>
      <div class="row">
        <div class="col-md-6">
          <h6 class="text-secondary">Field Details</h6>
          <ul class="list-unstyled">
            <li><strong>Facility ID:</strong> ${facilityId}</li>
            <li><strong>Facility Type:</strong> ${
              facilityType.charAt(0).toUpperCase() + facilityType.slice(1)
            }</li>
            <li><strong>Field Type:</strong> ${
              fieldType.charAt(0).toUpperCase() + fieldType.slice(1)
            }</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h6 class="text-secondary">Dimensions</h6>
          ${dimensionsHTML}
        </div>
      </div>
      <div class="mt-3">
        <h6 class="text-secondary">Compatible Sports</h6>
        ${sportsHTML}
      </div>
    </div>
  `;
}

/**
        var data = {
            FieldId: FieldId,
            SportTypeId: SportTypeId,
            ColorCode: ColorCode,
            SportAgeGroupId: SportAgeGroupId,
            UsageType: UsageType
        }
 */
async function addSport(data) {
  await fetch("https://www.gameplayus.com/api/FieldsApi/AddSport", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Sport added successfully:", data);
    })
    .catch((error) => {
      console.error("Error adding sport:", error);
    });
}

// document.getElementById("get-token-btn").addEventListener("click", () => {
//   chrome.runtime.sendMessage({ action: "getTokenFromActiveTab" }, (response) => {
//     const display = document.getElementById("dom-display");
//     const output = document.getElementById("dom-output");

//     if (response && !response.error && response.token) {
//       // Display token information in a user-friendly format
//       const tokenDisplay = {
//         token: response.token,
//         source: response.source,
//         foundIn: response.source === 'input_field' ? 'Input field with name="__RequestVerificationToken"' :
//                 response.source === 'meta_tag' ? 'Meta tag' :
//                 response.source === 'form_hidden_input' ? `Form ${response.formIndex}, input name: ${response.inputName}` :
//                 response.source === 'alternative_input' ? `Input with selector: ${response.selector}` :
//                 'Unknown source',
//         element: response.element
//       };

//       output.textContent = JSON.stringify(tokenDisplay, null, 2);
//       display.classList.remove("d-none");
//       console.log("Token Info:", response);

//       // Also display a more user-friendly message
//       const tokenValue = response.token;
//       console.log("🔑 Request Verification Token found:", tokenValue);

//       // Show a brief success message
//       const urlDisplay = document.getElementById("url-display");
//       urlDisplay.innerHTML = `<strong>Token Found:</strong> ${tokenValue.substring(0, 20)}... <br><small>Source: ${tokenDisplay.foundIn}</small>`;
//       urlDisplay.classList.remove("d-none");

//     } else {
//       const errorMsg = response?.message || response?.error || 'Failed to get token';
//       output.textContent = `Error: ${errorMsg}`;
//       display.classList.remove("d-none");
//       console.warn("Token extraction failed:", response);

//       // Show error in URL display
//       const urlDisplay = document.getElementById("url-display");
//       urlDisplay.innerHTML = `<strong>Token Not Found:</strong> ${errorMsg}`;
//       urlDisplay.classList.remove("d-none");
//     }
//   });
// });

// Function to populate field dropdown
function populateFieldDropdown(facilityData) {
  const fieldSelect = document.getElementById("fieldId");
  console.log("Populating field dropdown...");
  console.log("Facility Data:", facilityData);

  // Clear existing options except the first one
  fieldSelect.innerHTML = '<option value="">Select a Field</option>';

  if (facilityData && facilityData.data) {
    const data = facilityData.data;

    if (data.Fields && Array.isArray(data.Fields)) {
      data.Fields.forEach((field, index) => {
        const option = document.createElement("option");
        option.value = field.FieldId;
        option.textContent = `${field.FieldName} (ID: ${field.FieldId}) - ${field.FieldType}`;
        option.dataset.fieldData = JSON.stringify(field);
        option.dataset.facilityId = data.FacilityId;
        option.dataset.facilityName = data.FacilityName;
        fieldSelect.appendChild(option);
      });

      console.log(`Populated dropdown with ${data.Fields.length} fields`);
    }
  } else if (
    facilityData &&
    facilityData.fields &&
    Array.isArray(facilityData.fields)
  ) {
    // Fallback for different data structure
    facilityData.fields.forEach((field, index) => {
      const option = document.createElement("option");
      option.value = field.FieldId || index;
      option.textContent =
        field.FieldName || field.text || `Field ${index + 1}`;
      option.dataset.fieldData = JSON.stringify(field);
      fieldSelect.appendChild(option);
    });
  }
}

// Function to handle field selection
function handleFieldSelection() {
  const fieldSelect = document.getElementById("fieldId");
  const selectedOption = fieldSelect.options[fieldSelect.selectedIndex];

  if (selectedOption.value && selectedOption.dataset.fieldData) {
    const fieldData = JSON.parse(selectedOption.dataset.fieldData);

    // Populate facility ID
    if (selectedOption.dataset.facilityId) {
      document.getElementById("facilityId").value =
        selectedOption.dataset.facilityId;
    }

    // Populate field name
    // if (fieldData.FieldName) {
    //   document.getElementById("fieldName").value = fieldData.FieldName;
    // }

    // Try to match field type based on sport types or field name
    const fieldTypeSelect = document.getElementById("fieldType");
    let detectedFieldType = null;

    // Map sport types to field types
    const sportToFieldMap = {
      Basketball: "basketball",
      Baseball: "baseball",
      Soccer: "soccer",
      Football: "soccer", // Football fields are often soccer fields
      Tennis: "tennis",
      Volleyball: "volleyball",
      "Field Hockey": "soccer", // Field hockey often uses soccer fields
      Lacrosse: "soccer",
    };

    // Check sport types first
    if (fieldData.SportType && Array.isArray(fieldData.SportType)) {
      for (const sport of fieldData.SportType) {
        if (sportToFieldMap[sport]) {
          detectedFieldType = sportToFieldMap[sport];
          break; // Use first match
        }
      }
    }

    // Fallback: check field name for keywords
    if (!detectedFieldType && fieldData.FieldName) {
      const fieldName = fieldData.FieldName.toLowerCase();
      if (fieldName.includes("basketball") || fieldName.includes("gym")) {
        detectedFieldType = "basketball";
      } else if (fieldName.includes("baseball")) {
        detectedFieldType = "baseball";
      } else if (
        fieldName.includes("soccer") ||
        fieldName.includes("football")
      ) {
        detectedFieldType = "soccer";
      } else if (fieldName.includes("tennis")) {
        detectedFieldType = "tennis";
      } else if (fieldName.includes("volleyball")) {
        detectedFieldType = "volleyball";
      }
    }

    if (detectedFieldType) {
      fieldTypeSelect.value = detectedFieldType;
    }

    // Try to detect facility type from facility name
    if (selectedOption.dataset.facilityName) {
      const facilityTypeSelect = document.getElementById("facilityType");
      const facilityName = selectedOption.dataset.facilityName.toLowerCase();

      if (facilityName.includes("elementary")) {
        facilityTypeSelect.value = "elementary";
      } else if (facilityName.includes("middle")) {
        facilityTypeSelect.value = "middle";
      } else if (facilityName.includes("high")) {
        facilityTypeSelect.value = "high";
      } else if (facilityName.includes("park")) {
        facilityTypeSelect.value = "park";
      } else if (
        facilityName.includes("private") ||
        facilityName.includes("charter")
      ) {
        facilityTypeSelect.value = "private";
      }
    }

    console.log("Selected field:", fieldData);
    console.log("Detected field type:", detectedFieldType);

    // Show field details in the DOM display
    const display = document.getElementById("dom-display");
    const output = document.getElementById("dom-output");
    output.textContent = JSON.stringify(fieldData, null, 2);
    display.classList.remove("d-none");

    // Show success message with field info
    const urlDisplay = document.getElementById("url-display");
    urlDisplay.innerHTML = `<strong>Field Selected:</strong> ${
      fieldData.FieldName
    } (ID: ${fieldData.FieldId})<br><small>Sports: ${
      fieldData.SportType ? fieldData.SportType.join(", ") : "Unknown"
    }</small>`;
    urlDisplay.classList.remove("d-none");
  } else {
    // Clear form if no selection
    document.getElementById("facilityId").value = "";
    document.getElementById("fieldName").value = "";

    // Hide displays
    document.getElementById("dom-display").classList.add("d-none");
    document.getElementById("url-display").classList.add("d-none");
  }
}

// Add event listener for field selection
document
  .getElementById("fieldId")
  .addEventListener("change", handleFieldSelection);

// Add event listener for refresh fields button
document.getElementById("refresh-fields-btn").addEventListener("click", () => {
  // Get facility info and populate dropdown
  chrome.runtime.sendMessage(
    { action: "getFacilityInfoFromActiveTab" },
    (response) => {
      if (response && !response.error) {
        populateFieldDropdown(response);
        console.log("Field dropdown refreshed");

        // Show brief success message
        const urlDisplay = document.getElementById("url-display");
        urlDisplay.innerHTML =
          "<strong>Fields refreshed!</strong> Select a field from the dropdown.";
        urlDisplay.classList.remove("d-none");
      } else {
        console.error("Failed to refresh fields:", response);

        // Show error message
        const urlDisplay = document.getElementById("url-display");
        urlDisplay.innerHTML =
          "<strong>Error:</strong> Could not refresh fields. Make sure you're on a facility page.";
        urlDisplay.classList.remove("d-none");
      }
    }
  );
});
