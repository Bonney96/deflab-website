// Redirect the default Cloudflare Pages hostname to the canonical domain.
// Only matches the exact production pages.dev host, so branch preview
// deployments (<hash>.deflab-website.pages.dev) keep working.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "deflab-website.pages.dev") {
    url.hostname = "frantzlab.wustl.edu";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
