const server = process.env.REACT_APP_SERVER_URL;

export const registerService = async (userName, email, password) => {
  const response = await fetch(`${server}/register`, {
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
  const response = await fetch(`${server}/login`, {
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
  const response = await fetch(`${server}/validate`, {
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
  const response = await fetch(`${server}/newDataSheet`, {
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
  const response = await fetch(`${server}/getDS/${dataSheet}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
};

export const addUserService = async (user, dataId) => {
  const response = await fetch(`${server}/addUser`, {
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

export const addExpenseService = async (userId, concept, amount) => {
  console.log("service", userId, concept, amount);
  const response = await fetch(`${server}/addExpense`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, concept, amount }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
};

export const getSharedListService = async (userId) => {
 console.log("service",userId)
  const response = await fetch(`${server}/getSharedList/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
};
