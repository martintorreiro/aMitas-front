export const registerService = async (userName, email, password) => {
  const response = await fetch(`http://localhost:3100/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, email, password }),
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};

export const loginService = async (email, password) => {
  const response = await fetch(`http://localhost:3100/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }

  console.log(json);
  return json;
};
