import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const directoryPath = path.join(process.cwd(), 'public/assets/logos_photos');

  try {
    const files = await fs.promises.readdir(directoryPath);
    
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg', '.svg', '.webp'].includes(ext);
    });

    const imagePaths = imageFiles.map(file => `assets/logos_photos/${file}`);

    return NextResponse.json(imagePaths);
  } catch (error) {
    console.error('Error reading directory:', error);
    return NextResponse.json({ error: 'Failed to list images' }, { status: 500 });
  }
}
