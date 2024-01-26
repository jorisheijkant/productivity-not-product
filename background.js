let isExtensionActive = true;

let blockedSites = [
  {
    "name": "NOS",
    "site_url": "nos.nl",
    "type": "news"
  },
  {
    "name": "Nu",
    "site_url": "nu.nl",
    "type": "news"
  },
  {
    "name": "AD",
    "site_url": "ad.nl",
    "type": "news"
  },
  {
    "name": "NRC",
    "site_url": "nrc.nl",
    "type": "news"
  },
  {
    "name": "Ny Times",
    "site_url": "nytimes.com",
    "type": "news"
  },
  {
    "name": "Guardian",
    "site_url": "guardian.com",
    "type": "news"
  },
  {
    "name": "Whatsapp",
    "site_url": "web.whatsapp.com",
    "type": "social"
  },
  {
    "name": "Youtube",
    "site_url": "youtube.com",
    "type": "entertainment"
  }
]

function blockSite(details) {
   // Check if the requested URL matches any of the blocked sites
   const isBlockedSite = blockedSites.some(blockedSite => details.url.includes(blockedSite.url));

   if (isBlockedSite) {
     // Redirect the blocked site to a blank page
     const blockingResponse = {
       redirectUrl: browser.runtime.getURL("blocked.html")
     };
 
     // Use the webRequest API to block the site
     browser.webRequest.onBeforeRequest.addListener(
       function (requestDetails) {
         return blockingResponse;
       },
       { urls: ["*://" + details.url + "/*"] },
       ["blocking"]
     );
 
     console.log("Blocking site:", details.url);
   }
}

// Listen for messages from the popup
browser.runtime.onMessage.addListener((message) => {
  if (message.toggle) {
    isExtensionActive = !isExtensionActive;
    updateExtensionState();
  }
});

// Function to update extension state
function updateExtensionState() {
  const statusText = isExtensionActive ? "Active" : "Inactive";
  console.log("Extension is now:", statusText);

  // Implement logic to block/unblock sites based on isExtensionActive
  if (isExtensionActive) {
    blockSite({ url: "example.com" });
  } else {
    // Unblock sites
  }
}