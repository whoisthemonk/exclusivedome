
export async function handler(event) {
  const { from, to, propertyId } = event.queryStringParameters;

  const response = await fetch(`https://public-api.lodgify.com/v2/calendar/availability?propertyId=${propertyId}&from=${from}&to=${to}`, {
    headers: {
      'Authorization': 'Bearer YOUR_API_TOKEN_HERE'
    }
  });

  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: JSON.stringify(data)
  };
}
