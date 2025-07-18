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

async function getCurrentURL() {
  try {
    return await new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(
        {
          action: "getCurrentTabUrl",
        },
        (response) => {
          console.log("Response from getCurrentTabUrl:", response);
          if (response && response.url) {
            resolve(response.url);
          } else {
            reject("Unable to get URL");
          }
        }
      );
    });
  } catch (error) {
    console.error("Error getting current URL:", error);
    return "Error getting URL";
  }
}

function extractJSONData(html) {
  try {
    const jsonData = {};

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const scriptTags = doc.querySelectorAll("script");
    scriptTags.forEach((script, index) => {
      const scriptContent = script.textContent || script.innerHTML;

      // Look for JSON.parse patterns - improved regex to handle complex JSON
      const jsonParseRegex =
        /var\s+data\s*=\s*JSON\.parse\s*\(\s*['"](.*?)['"]\s*\)/gs;
      let match;

      while ((match = jsonParseRegex.exec(scriptContent)) !== null) {
        try {
          // Unescape the JSON string properly
          let jsonString = match[1];

          // Handle various escape sequences
          jsonString = jsonString
            .replace(/\\'/g, "'")
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, "\\")
            .replace(/\\u([0-9a-fA-F]{4})/g, (match, hex) =>
              String.fromCharCode(parseInt(hex, 16))
            );

          const parsedData = JSON.parse(jsonString);
          jsonData[`script_${index}_json_parse`] = parsedData; // Store the data
          console.log("Found JSON data in script tag:", parsedData);
          // Don't return early, continue processing other scripts
        } catch (error) {
          console.warn("Failed to parse JSON from script tag:", error);
          console.warn(
            "Raw JSON string was:",
            match[1].substring(0, 200) + "..."
          );
        }
      }
      // Look for other variable assignments with JSON-like data
      //   const varDataRegex = /var\s+data\s*=\s*({[^;]+})/g;
      //   while ((match = varDataRegex.exec(scriptContent)) !== null) {
      //     try {
      //       const parsedData = eval(`(${match[1]})`);
      //       jsonData[`script_${index}_var_data`] = parsedData;
      //     } catch (error) {
      //       console.warn("Failed to parse variable data from script tag:", error);
      //     }
      //   }
    });

    console.log("Final extracted JSON data:", jsonData);
    return jsonData;
  } catch (e) {
    console.error("Error extracting JSON data:", e);
    return { error: e.message };
  }
}

async function createFieldAndAddSports({
  facilityId,
  facilityName,
  facilityType,
  GpsLocation,
  City,
  State,
  County,
  ZipCode,
  fieldName,
  fieldWidth,
  fieldLength,
  fieldType,
  mainSport,
  fieldSurfaceType,
  fieldBaseballLength,
  fieldBaseballWidth,
  compatibleSports,
  googleEarthImageUrl,
}) {
  try {
    const cookies = await new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: "getCookies" }, (response) => {
        resolve(response.cookies);
      });
    });

    const token = await getToken(facilityId);

    console.log("Cookies received:", cookies);
    console.log("Token received:", token);

    const formData = new FormData();
    formData.append("FacilityId", facilityId);
    formData.append("FacilityName", facilityName);
    formData.append("GpsLocation", GpsLocation);
    formData.append("City", City);
    formData.append("State", State);
    formData.append("County", County);
    formData.append("ZipCode", ZipCode);
    formData.append("Fields[0].FieldName", fieldName || "");
    if (!fieldName) formData.append("__Invariant", "Fields[0].FieldName");
    formData.append("Fields[0].FieldType", fieldSurfaceType || "");
    if (!fieldSurfaceType)
      formData.append("__Invariant", "Fields[0].FieldType");
    formData.append("Fields[0].SportTypeId", mainSport.id || "");
    if (!mainSport.id) formData.append("__Invariant", "Fields[0].SportTypeId");
    formData.append("Fields[0].FieldMap", googleEarthImageUrl || "");
    if (!fieldType) formData.append("__Invariant", "Fields[0].FieldMap");
    formData.append("Fields[0].Length", fieldLength || "");
    if (!fieldLength) formData.append("__Invariant", "Fields[0].Length");
    formData.append("Fields[0].Width", fieldWidth || "");
    if (!fieldWidth) formData.append("__Invariant", "Fields[0].Width");
    formData.append("Fields[0].BaseballLength", fieldBaseballLength || "");
    if (!fieldBaseballLength)
      formData.append("__Invariant", "Fields[0].BaseballLength");
    formData.append("Fields[0].BaseballWidth", fieldBaseballWidth || "");
    if (!fieldBaseballWidth)
      formData.append("__Invariant", "Fields[0].BaseballWidth");

    for (i = 1; i < 10; i++) {
      formData.append(`Fields[${i}].FieldName`, "");
      formData.append(`__Invariant`, `Fields[${i}].FieldName`);
      formData.append(`Fields[${i}].Length`, "");
      formData.append(`__Invariant`, `Fields[${i}].Length`);
      formData.append(`Fields[${i}].Width`, "");
      formData.append(`__Invariant`, `Fields[${i}].Width`);
      formData.append(`Fields[${i}].FieldType`, "");
      formData.append(`__Invariant`, `Fields[${i}].FieldType`);
      formData.append(`Fields[${i}].SportTypeId`, "0");
      formData.append(`Fields[${i}].FieldMap`, "");
      formData.append(`__Invariant`, `Fields[${i}].FieldMap`);
      formData.append(`Fields[${i}].BaseballLength`, "");
      formData.append(`__Invariant`, `Fields[${i}].BaseballLength`);
      formData.append(`Fields[${i}].BaseballWidth`, "");
      formData.append(`__Invariant`, `Fields[${i}].BaseballWidth`);
    }

    formData.append("__RequestVerificationToken", token);

    console.log(new URLSearchParams(formData).toString());

    const response = await fetch(
      "https://www.gameplayus.com/Facilities/FacilityUpsert/" + facilityId,
      {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "max-age=0",
          "content-type": "application/x-www-form-urlencoded",
          cookie: cookies
            .map((cookie) => `${cookie.name}=${cookie.value}`)
            .join("; "),
        },
        body: new URLSearchParams(formData).toString(),
        method: "POST",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.statusText);
    }

    const data = await response.text();
    console.log("Sport added successfully:", data);

    let newFacilityData = extractJSONData(data);

    // get the first attr of newFacilityData
    if (newFacilityData && Object.keys(newFacilityData).length > 0) {
      newFacilityData = newFacilityData[Object.keys(newFacilityData)[0]];
    } else {
      newFacilityData = { error: "No data found in response" };
    }

    console.log("New facility data:", newFacilityData);

    const createdFieldId = newFacilityData.Fields.find(
      (field) =>
        field.FieldName === fieldName && field.FieldType === fieldSurfaceType
    )?.FieldId;

    if (!createdFieldId) {
      throw new Error("Field creation failed or field not found in response");
    }
    console.log("Created Field ID:", createdFieldId);

    // Add sports to the created field

    // Fix first sport

    await fetch("https://www.gameplayus.com/api/FieldsApi/EditSport", {
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json; charset=UTF-8",
        cookie: cookies
          .map((cookie) => `${cookie.name}=${cookie.value}`)
          .join("; "),
      },
      body:
        '{"FieldId":' +
        createdFieldId +
        ',"SportTypeId":' +
        mainSport.id +
        ',"ColorCode":"' +
        (mainSport.priority === "primary" ? "green" : "yellow") +
        '","SportAgeGroupId":' +
        mainSport.sportsAgeId +
        ',"UsageType":' +
        (mainSport.priority === "primary" ? 1 : 2) +
        "}",
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("First sport added successfully:", data);
      });

    await Promise.all(
      compatibleSports.map(async (sport) => {
        if (sport.id === mainSport.id) return;
        const sportData = {
          FieldId: createdFieldId,
          SportTypeId: sport.id,
          ColorCode: sport.priority === "primary" ? "green" : "yellow",
          SportAgeGroupId: sport.sportsAgeId,
          UsageType: sport.priority === "primary" ? 1 : 2,
        };
        console.log("Adding sport:", sport.name);
        await addSport(sportData);
        console.log("Sport added:", sport.name);
      })
    );

    console.log("All sports added successfully");

    triggerRefresh();
  } catch (error) {
    console.error("Error adding sport:", error);
  }
}

async function getToken(facilityId) {
  try {
    const response = await fetch(
      "https://www.gameplayus.com/Facilities/FacilityUpsert/" + facilityId,
      {
        method: "GET",
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "max-age=0",
          cookie: document.cookie,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.statusText);
    }

    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    const tokenElement = doc.querySelector(
      'input[name="__RequestVerificationToken"]'
    );

    return tokenElement ? tokenElement.value : null;
  } catch (error) {
    console.error("Error fetching token:", error);
  }
}

// Form submission handler
document.getElementById("field-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting normally

  console.log("Form submitted");

  // Get form values
  const facilityId = document.getElementById("facilityId").value;
  const facilityName = document.getElementById("facilityName").value;
  const facilityType = document.getElementById("facilityType").value;
  const gpsLocation = document.getElementById("gpsLocation").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const county = document.getElementById("county").value;
  const zip = document.getElementById("zip").value;
  const fieldName = document.getElementById("fieldName").value;
  const fieldType =
    document.getElementById("fieldType").selectedOptions[0].value;
  const fieldSurfaceType = document.getElementById("fieldSurfaceType").value;
  const googleEarthImageUrl = document.getElementById(
    "googleEarthImageUrl"
  ).value;
  const requestVerificationToken = document.getElementById(
    "requestVerificationToken"
  ).value;

  // Find matching sportsData object
  const matchingData = sportsData.find(
    (data) => data.facilityType === facilityType && data.fieldType === fieldType
  );

  if (matchingData) {
    // Create field object with the matching data
    const fieldObject = {
      facilityId: facilityId,
      facilityType: facilityType,
      fieldName: fieldName,
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

    createFieldAndAddSports({
      facilityId: facilityId,
      facilityName: facilityName,
      facilityType: facilityType,
      GpsLocation: gpsLocation,
      City: city,
      State: state,
      County: county,
      ZipCode: zip,
      fieldName: fieldName,
      fieldType: fieldType,
      mainSport: matchingData.compatibleSports[0],
      fieldLength: fieldObject.dimensions.length,
      fieldWidth: fieldObject.dimensions.width,
      fieldBaseballLength: fieldObject.dimensions.baseballLength,
      fieldBaseballWidth: fieldObject.dimensions.baseballWidth,
      fieldSurfaceType: fieldSurfaceType,
      requestVerificationToken,
      compatibleSports: matchingData.compatibleSports,
      googleEarthImageUrl: googleEarthImageUrl,
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

          if (response.data) {
            const data = response.data;

            if (data.City) {
              document.getElementById("city").value = data.City;
            }

            if (data.State) {
              document.getElementById("state").value = data.State;
            }

            if (data.County) {
              document.getElementById("county").value = data.County;
            }

            if (data.FacilityName) {
              document.getElementById("facilityName").value = data.FacilityName;
            }

            if (data.GpsLocation) {
              document.getElementById("gpsLocation").value = data.GpsLocation;
            }

            if (data.ZipCode) {
              document.getElementById("zip").value = data.ZipCode;
            }

            if (response.requestVerificationToken) {
              document.getElementById("requestVerificationToken").value =
                response.requestVerificationToken.token;
            }
          }

          facilityData = response;
        } else {
          output.textContent = `Error: ${
            response?.error || "Failed to get facility info"
          }`;
          display.classList.remove("d-none");
        }
      }
    );
  });

// Function to trigger a refresh
function triggerRefresh() {
  chrome.runtime.sendMessage({ action: "refresh" }, (response) => {
    if (response && response.success) {
      console.log("Refresh triggered successfully");
    } else {
      console.error("Failed to trigger refresh", response);
    }
  });
}

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