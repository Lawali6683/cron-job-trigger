export default {
  async scheduled(event, env, ctx) {
    const urls = [
      "https://tauraronwasa.pages.dev/api/site6?key=@haruna66",
      "https://bonus-gamma.vercel.app/api/monitorDeposits?key=@haruna66"
    ];

    for (const url of urls) {
      try {
        const response = await fetch(url);
        console.log("Pinged:", url, "Status:", response.status);
      } catch (err) {
        console.error("Error pinging:", url, err.message);
      }
    }
  }
};
