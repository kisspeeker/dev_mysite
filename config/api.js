import { API_ROOT } from '@/config';
import fallbackHomepage from '@/static/fallback.json'

export async function fetchHomepage () {
  try {
    console.warn(1);
    const res = await fetch(API_ROOT + '/homepage?populate=*').then(res => res.json())
    console.warn(2, res);
    if (res && !res.error) {
      console.warn(3);
      return res
    }
    console.warn(4, fallbackHomepage);
    return fallbackHomepage
  } catch (e) {
    console.warn(5, e);
    console.error(e);
  }
}
