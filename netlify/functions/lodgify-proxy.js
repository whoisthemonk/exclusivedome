export async function handler(event) {
  const { from, to, propertyId } = event.queryStringParameters;

  if (!from || !to || !propertyId) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify({ error: "Missing required query parameters" }),
    };
  }

  try {
    const response = await fetch(
      `https://public-api.lodgify.com/v2/calendar/availability?propertyId=${propertyId}&from=${from}&to=${to}`,
      {
        headers: {
          'Authorization': 'Bearer oZrpljNpDIln9Im8drC1zjFtGifpOKsgQSi+AAS3isFyU1aNoWG520kQX/R+iaXm'
        }
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify({ error: err.message }),
    };
  }
}
