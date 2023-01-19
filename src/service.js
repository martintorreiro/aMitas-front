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

export const validateService = async (email, registrationCode) => {
  const response = await fetch(`http://localhost:3100/validate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, registrationCode }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
};

export const createDataSheetService = async (dataSheet) => {
  const response = await fetch(`http://localhost:3100/newDataSheet`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dataSheet }),
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.urlCode;
};

export const getDataSheetService = async (dataSheet) => {
  const response = await fetch(`http://localhost:3100/getDS/${dataSheet}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  console.log(json);

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
};

export const addUserService = async (user, dataId) => {
  const response = await fetch(`http://localhost:3100/addUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user, dataId }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
};

export const addExpenseService = async (dataId, concept, amount) => {
  const response = await fetch(`http://localhost:3100/addExpense`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dataId, concept, amount }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
};
