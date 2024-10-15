// Poly deployed @ 2024-09-20T21:58:31.264Z - demo.helloPoly - https://na1.polyapi.io/canopy/polyui/collections/server-functions/f382e9df-d591-4080-93e0-9dc2d0297444 - 75a08d6
import { PolyServerFunction } from "polyapi"

export const polyConfig: PolyServerFunction = {
  name: "helloPoly",
  context: "demo"
}

/**
 * Greet new users of Poly
 *
 * @param {string} first_name - The user's first name
 * @returns {Promise<string>} A greeting for the user from Poly
 */
export async function helloPoly(first_name: string): Promise<string> {
  return `Hello ${first_name}! I'm Poly, your helpful guide to the world of api integrations and middleware.`;
}