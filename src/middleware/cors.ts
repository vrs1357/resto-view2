import { NextApiRequest, NextApiResponse } from 'next';

export default function corsMiddleware(req: NextApiRequest, res: NextApiResponse, next: () => void) {
  // Enable CORS for all origins (*)
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Set allowed headers and methods
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
}
