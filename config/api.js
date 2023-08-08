import { API_ROOT } from '@/config';
import fallbackHomepage from '@/static/fallback.json'

export async function fetchHomepage () {
  try {
    const res = await fetch(API_ROOT + '/homepage?populate=*').then(res => res.json())
    if (res && !res.error) {
      return res
    }
    return fallbackHomepage
  } catch (e) {
    console.error(e);
  }
}
