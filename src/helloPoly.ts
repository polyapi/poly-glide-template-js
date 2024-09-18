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