import { API_ROOT } from '@/config';
import fallbackHomepage from '@/static/fallback.json'

export async function fetchHomepage () {
  try {
    return await fetch(API_ROOT + '/homepage?populate=*').then(res => res.json())
  } catch (e) {
    console.error(e);
    console.warn('*** USING FALLBACK DATA ***');
    return fallbackHomepage
  }
}
