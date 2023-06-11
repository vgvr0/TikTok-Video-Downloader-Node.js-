const TikTokScraper = require('tiktok-scraper');

// TikTok video URL to download
const videoUrl = 'https://www.tiktok.com/@username/video/123456789';

// Destination directory where the downloaded video will be saved
const outputDir = '/path/to/directory';

// Download the video
(async () => {
  try {
    const scraper = new TikTokScraper();
    const videoPath = await scraper.downloadVideo(videoUrl, outputDir);
    console.log('Downloaded video:', videoPath);
  } catch (error) {
    console.error('Error downloading video:', error);
  }
})();
