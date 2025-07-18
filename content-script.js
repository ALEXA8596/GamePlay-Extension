// Content script that runs on GamePlayUS website
console.log("GamePlayUS Content Script loaded");
console.log("Content script is active and listening for refresh action");

// Function to get DOM information
// function getDOMInfo() {
//   return {
//     url: window.location.href,
//     title: document.title,
//     bodyText: document.body.innerText.substring(0, 1000), // First 1000 chars
//     forms: Array.from(document.forms).map((form) => ({
//       id: form.id,
//       name: form.name,
//       action: form.action,
//       method: form.method,
//       inputs: Array.from(form.elements).map((input) => ({
//         name: input.name,
//         type: input.type,
//         id: input.id,
//         value: input.value,
//       })),
//     })),
//     facilityInfo: extractFacilityInfo(),
//   };
// }

// Function to extract JSON data from script tags
function extractJSONData() {
  try {
    const jsonData = {};

    // Method 1: Extract from script tags containing JSON.parse
    const scriptTags = document.querySelectorAll("script");
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
    // Method 2: Check if data is available in global scope
    try {
      if (window.data) {
        jsonData.window_data = window.data;
      }
    } catch (error) {
      console.warn("No window.data available");
    }

    console.log("Final extracted JSON data:", jsonData);
    return jsonData;
  } catch (e) {
    console.error("Error extracting JSON data:", e);
    return { error: e.message };
  }
}

// Function to extract specific facility information from the page
function extractFacilityInfo() {
  const facilityInfo = {};

  // First try to get JSON data
  const jsonData = extractJSONData();

  // If we found facility data in JSON, use it
  if (jsonData.extracted_facility_data) {
    const data = jsonData.extracted_facility_data;
    facilityInfo.facilityId = data.FacilityId;
    facilityInfo.facilityName = data.FacilityName;
    facilityInfo.gpsLocation = data.GpsLocation;
    facilityInfo.city = data.City;
    facilityInfo.county = data.County;
    facilityInfo.state = data.State;
    facilityInfo.zipCode = data.ZipCode;
    facilityInfo.fields = data.Fields;
    facilityInfo.source = "json_data";
  } else {
    // Fallback to DOM extraction
    const facilityIdMatch = window.location.href.match(/FacilityDetail\/(\d+)/);
    if (facilityIdMatch) {
      facilityInfo.facilityId = facilityIdMatch[1];
    }

    const facilityNameElement = document.querySelector(
      "h1, .facility-name, [data-facility-name]"
    );
    if (facilityNameElement) {
      facilityInfo.facilityName = facilityNameElement.textContent.trim();
    }

    const fieldElements = document.querySelectorAll(
      "[data-field], .field-item, .field-row"
    );
    facilityInfo.fields = Array.from(fieldElements).map((el) => ({
      text: el.textContent.trim(),
      html: el.outerHTML,
    }));

    const gpsElement = document.querySelector(
      "[data-gps], .coordinates, .location"
    );
    if (gpsElement) {
      facilityInfo.gpsLocation = gpsElement.textContent.trim();
    }

    facilityInfo.source = "dom_extraction";
  }

  // Get the first attr of jsonData and include it
  if (jsonData && Object.keys(jsonData).length > 0) {
    const firstAttribute = Object.keys(jsonData)[0];
    facilityInfo.data = jsonData[firstAttribute];
  }

  // Also include the request verification token
  facilityInfo.requestVerificationToken = getRequestVerificationToken();

  return facilityInfo;
}

// Function to extract CSRF/Request Verification Token
function getRequestVerificationToken() {
  try {
    // Method 1: Look for input field with name="__RequestVerificationToken"
    const tokenInput = document.querySelector(
      'input[name="__RequestVerificationToken"]'
    );
    if (tokenInput && tokenInput.value) {
      console.log(
        "Found __RequestVerificationToken in input field:",
        tokenInput.value
      );
      return {
        source: "input_field",
        token: tokenInput.value,
        element: tokenInput.outerHTML,
      };
    }

    // Method 2: Look for hidden input fields with similar names
    const possibleSelectors = [
      'input[name="__RequestVerificationToken"]',
      'input[name="_token"]',
      'input[name="csrf_token"]',
      'input[name="authenticity_token"]',
      'input[type="hidden"][name*="token"]',
      'input[type="hidden"][name*="Token"]',
    ];

    for (const selector of possibleSelectors) {
      const element = document.querySelector(selector);
      if (element && element.value) {
        console.log(`Found token with selector ${selector}:`, element.value);
        return {
          source: "alternative_input",
          selector: selector,
          token: element.value,
          element: element.outerHTML,
        };
      }
    }

    // Method 3: Look in meta tags
    const metaToken =
      document.querySelector('meta[name="csrf-token"]') ||
      document.querySelector('meta[name="_token"]') ||
      document.querySelector('meta[name="__RequestVerificationToken"]');

    if (metaToken && metaToken.getAttribute("content")) {
      const tokenValue = metaToken.getAttribute("content");
      console.log("Found token in meta tag:", tokenValue);
      return {
        source: "meta_tag",
        token: tokenValue,
        element: metaToken.outerHTML,
      };
    }

    // Method 4: Look in all forms for any token-like inputs
    const forms = document.querySelectorAll("form");
    for (let i = 0; i < forms.length; i++) {
      const form = forms[i];
      const tokenInputs = form.querySelectorAll('input[type="hidden"]');

      for (const input of tokenInputs) {
        if (
          input.name &&
          input.name.toLowerCase().includes("token") &&
          input.value
        ) {
          console.log(
            `Found token in form ${i}, input name: ${input.name}:`,
            input.value
          );
          return {
            source: "form_hidden_input",
            formIndex: i,
            inputName: input.name,
            token: input.value,
            element: input.outerHTML,
          };
        }
      }
    }

    console.warn("No __RequestVerificationToken found on page");
    return {
      source: "not_found",
      token: null,
      message: "No request verification token found on page",
    };
  } catch (error) {
    console.error("Error extracting request verification token:", error);
    return {
      source: "error",
      token: null,
      error: error.message,
    };
  }
}

// Function to click submit button
function submitForm(formSelector = "form") {
  try {
    const form = document.querySelector(formSelector);
    if (form) {
      const submitButton = form.querySelector(
        '[type="submit"], .submit-btn, .btn-submit'
      );
      if (submitButton) {
        submitButton.click();
        return { success: true, message: "Form submitted" };
      } else {
        form.submit();
        return { success: true, message: "Form submitted via form.submit()" };
      }
    }
    return { success: false, message: "Form not found" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// Listen for messages from service worker
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Content script received message:", request);

  switch (request.action) {
    case "getDOMInfo":
      const domInfo = getDOMInfo();
      console.log("Sending DOM info:", domInfo);
      sendResponse(domInfo);
      break;

    case "getFacilityInfo":
      const facilityInfo = extractFacilityInfo();
      console.log("Sending facility info:", facilityInfo);
      sendResponse(facilityInfo);
      break;

    case "getJSONData":
      const jsonData = extractJSONData();
      console.log("Sending JSON data:", jsonData);
      sendResponse(jsonData);
      break;

    case "getRequestVerificationToken":
      const tokenInfo = getRequestVerificationToken();
      console.log("Sending token info:", tokenInfo);
      sendResponse(tokenInfo);
      break;

    case "submitForm":
      const submitResult = submitForm(request.formSelector);
      console.log("Form submission result:", submitResult);
      sendResponse(submitResult);
      break;

    case "executeScript":
      try {
        const result = eval(request.script);
        sendResponse({ success: true, result: result });
      } catch (error) {
        sendResponse({ success: false, error: error.message });
      }
      break;

    case "refresh":
      console.log("Refresh action received, reloading page");
      window.location.reload();
      sendResponse({ success: true });
      break;

    default:
      sendResponse({ error: "Unknown action" });
  }

  return true; // Keep the message channel open for async response
});

// Send a message to service worker when content script loads
chrome.runtime.sendMessage({
  action: "contentScriptLoaded",
  url: window.location.href,
  title: document.title,
});

// Optional: Monitor for DOM changes
const observer = new MutationObserver((mutations) => {
  // You can add logic here to detect when forms or facility data changes
  console.log("DOM changed");
});

// Start observing
observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
});
