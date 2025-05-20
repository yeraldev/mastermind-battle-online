import type { APIRoute } from "astro";

const apiUrl = import.meta.env.PRIVATER_URL_SERVER;

export const GET: APIRoute = async ({ locals }) => {
  try {
    const { userId, getToken } = locals.auth();

    console.log(userId);

    if (!userId) {
      return new Response(JSON.stringify({ error: "No autorizado" }), {
        status: 401,
        headers: { "Content-type": "application/json" },
      });
    }

    const token = await getToken();

    if (!token) {
      return new Response(
        JSON.stringify({
          error: "No se pudo obtener el token de autenticación",
        }),
        { status: 401 }
      );
    }
    console.log(token);

    const apiResponse = await fetch(`${apiUrl}matches/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!apiResponse.ok) {
      throw new Error(`Error en la API: ${apiResponse.statusText}`);
    }

    const stats = await apiResponse.json();

    return new Response(JSON.stringify(stats), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error al obtener estadísticas:", error);
    return new Response(
      JSON.stringify({
        error: "Error interno del servidor",
        details: error instanceof Error ? error.message : "Error desconocido",
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
