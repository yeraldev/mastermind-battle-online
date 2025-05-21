import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  try {
    const apiResponse = await fetch(
      `${import.meta.env.PRIVATE_URL_SERVER}matches/All`,
      { headers: { "Content-Type": "application/json" } }
    );

    if (!apiResponse.ok) {
      throw new Error(`Error en la API: ${apiResponse.statusText}`);
    }

    const data = await apiResponse.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to fetch leaderboard data",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
