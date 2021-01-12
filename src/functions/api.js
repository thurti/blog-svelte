export async function getPosts(params) {
  const slug = encodeURI(params.slug || '');
  const url = `${params.api}/${slug}`;
  
  const res = await fetch(url);

  if (res.ok) {
    return await res.json();
  } else {
    throw new Error(`${res.status}: ${res.statusText}`);
  }
}