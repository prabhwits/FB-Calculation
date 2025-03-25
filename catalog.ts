import * as fs from 'fs';
import * as path from 'path';

function readIndexJson(filePath: string): any | null {
  try {
    const fullPath = path.resolve(filePath);
    const data = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading index.json:', error);
    return null;
  }
}

const jsonData = readIndexJson('index2.json');
const catalog = jsonData?.message?.catalog?.['bpp/providers'][0]

export const categories = catalog?.categories;

export const items = catalog?.items