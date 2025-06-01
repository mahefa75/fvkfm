import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from 'canvas';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_SIZES = {
  'church-hero.jpg': { width: 1920, height: 1080 },
  'mission.jpg': { width: 800, height: 600 },
  'sermon': { width: 800, height: 600 },
  'pastor': { width: 400, height: 600 },
  'event': { width: 800, height: 600 }
};

const COLORS = {
  background: '#f3f4f6',
  text: '#4b5563',
  accent: '#f59e0b'
};

function generatePlaceholderImage(filename, width, height, text) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = COLORS.background;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = COLORS.text;
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Add accent line
  ctx.strokeStyle = COLORS.accent;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(width * 0.2, height * 0.8);
  ctx.lineTo(width * 0.8, height * 0.8);
  ctx.stroke();

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  const outputPath = path.join(__dirname, '..', 'public', 'assets', 'images', filename);
  fs.writeFileSync(outputPath, buffer);
}

function generateAllPlaceholderImages() {
  // Create images directory if it doesn't exist
  const imagesDir = path.join(__dirname, '..', 'public', 'assets', 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Generate hero image
  generatePlaceholderImage(
    'church-hero.jpg',
    IMAGE_SIZES['church-hero.jpg'].width,
    IMAGE_SIZES['church-hero.jpg'].height,
    'Church Hero Image'
  );

  // Generate mission image
  generatePlaceholderImage(
    'mission.jpg',
    IMAGE_SIZES['mission.jpg'].width,
    IMAGE_SIZES['mission.jpg'].height,
    'Mission Image'
  );

  // Generate sermon images
  for (let i = 1; i <= 12; i++) {
    generatePlaceholderImage(
      `sermon${i}.jpg`,
      IMAGE_SIZES['sermon'].width,
      IMAGE_SIZES['sermon'].height,
      `Sermon ${i}`
    );
  }

  // Generate pastor images
  for (let i = 1; i <= 3; i++) {
    generatePlaceholderImage(
      `pastor${i}.jpg`,
      IMAGE_SIZES['pastor'].width,
      IMAGE_SIZES['pastor'].height,
      `Pastor ${i}`
    );
  }

  // Generate event images
  for (let i = 1; i <= 15; i++) {
    generatePlaceholderImage(
      `event${i}.jpg`,
      IMAGE_SIZES['event'].width,
      IMAGE_SIZES['event'].height,
      `Event ${i}`
    );
  }

  console.log('All placeholder images have been generated successfully!');
}

generateAllPlaceholderImages(); 