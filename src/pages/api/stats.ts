import type { APIRoute } from "astro";

const apiUrl = import.meta.env.PRIVATE_URL_SERVER;

export const GET: APIRoute = async ({ locals }) => {
  try {
    const { userId, getToken } = locals.auth();

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

    const apiResponse = await fetch(
      `${import.meta.env.PRIVATE_URL_SERVER}matches/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

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

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const { userId, getToken } = locals.auth();

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

    const body = await request.json();

    // Validate required fields
    if (typeof body.isWinner !== "boolean" || typeof body.score !== "number") {
      return new Response(
        JSON.stringify({
          error:
            "Datos inválidos. Se requiere isWinner (boolean) y score (number)",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const apiResponse = await fetch(`${apiUrl}matches`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isWinner: body.isWinner,
        score: body.score,
      }),
    });

    if (!apiResponse.ok) {
      throw new Error(`Error en la API: ${apiResponse.statusText}`);
    }

    const result = await apiResponse.json();

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error al actualizar estadísticas:", error);
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
