import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return response.status(500).json({ error: 'File upload is not configured.' });
  }

  const body = request.body as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: [
          'image/jpeg',
          'image/jpg',
          'image/png',
          'image/webp',
          'application/pdf',
        ],
        maximumSizeInBytes: 10 * 1024 * 1024,
        addRandomSuffix: true,
      }),
      onUploadCompleted: async () => {},
    });

    return response.status(200).json(jsonResponse);
  } catch (error) {
    console.error('Upload failed:', error);
    return response.status(400).json({ error: (error as Error).message });
  }
}
