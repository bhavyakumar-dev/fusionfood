// Cloudflare Pages Functions CORS & Error Middleware
// Intercepts all requests matching /api/*

function getCorsHeaders(request) {
  const origin = request.headers.get('Origin') || '*';
  // Allow Cloudflare Pages, local dev, null (file://), and wildcards
  const isAllowedOrigin = origin === '*' ||
    origin === 'null' ||
    origin.endsWith('.pages.dev') ||
    origin.startsWith('http://localhost') ||
    origin.startsWith('http://127.0.0.1');

  const allowOrigin = isAllowedOrigin ? origin : '*';

  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Cache-Control',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}

export async function onRequest(context) {
  const { request } = context;
  const cors = getCorsHeaders(request);

  // Handle CORS Preflight OPTIONS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: cors
    });
  }

  try {
    const response = await context.next();

    // Clone headers and decorate with CORS and security headers
    const headers = new Headers(response.headers);
    for (const [key, value] of Object.entries(cors)) {
      headers.set(key, value);
    }

    if (!headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json; charset=UTF-8');
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  } catch (err) {
    const errorPayload = JSON.stringify({
      success: false,
      error: err.message || 'Internal Server Error'
    });

    const errorHeaders = {
      'Content-Type': 'application/json; charset=UTF-8',
      ...cors
    };

    return new Response(errorPayload, {
      status: 500,
      headers: errorHeaders
    });
  }
}
