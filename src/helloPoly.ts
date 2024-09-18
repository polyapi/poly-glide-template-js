// Poly deployed @ 2024-09-18T20:54:42.005Z - demo.helloPoly - https://na1.polyapi.io/canopy/polyui/collections/server-functions/94e84af1-4ddb-446e-8b6e-2572ad9e240e
// Poly deployed @ 2024-09-18T20:53:12.814Z - demo.helloPoly - https://na1.polyapi.io/canopy/polyui/collections/server-functions/94e84af1-4ddb-446e-8b6e-2572ad9e240e
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