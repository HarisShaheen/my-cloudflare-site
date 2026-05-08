export default {
  async fetch(request, env) {
    const html = `<!DOCTYPE html>
<html>
<head>
  <title>GitHub + Cloudflare</title>
  <style>
    body { 
      font-family: sans-serif; 
      text-align: center; 
      padding: 60px; 
      background: #f0f4ff; 
    }
    h1 { color: #2c5282; font-size: 2.5rem; }
    p { color: #555; font-size: 1.2rem; }
    .badge { 
      background: #2c5282; 
      color: white; 
      padding: 10px 24px; 
      border-radius: 20px; 
      display: inline-block; 
      margin-top: 20px; 
    }
    .info {
      background: white;
      border-radius: 12px;
      padding: 20px;
      margin: 20px auto;
      max-width: 500px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <h1>🚀 Deployed via GitHub!</h1>
  <div class="info">
    <p>✅ Connected to GitHub</p>
    <p>✅ Auto-deploys on every push</p>
    <p>✅ Running on Cloudflare Workers</p>
  </div>
  <div class="badge">✅ Task 4 Complete!</div>
</body>
</html>`;

    return new Response(html, {
      headers: { 'Content-Type': 'text/html' }
    });
  }
};
