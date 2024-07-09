export async function login(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  try {
    const response = await fetch(
      `${process.env.REACT_APP_HOST}/login`,
      requestOptions
    );

    if (!response.ok) {
      throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }

    const data = await response.json();

    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export async function register(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  try {
    const response = await fetch(
      `${process.env.REACT_APP_HOST}/register`,
      requestOptions
    );

    if (!response.ok) {
      throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }

    const data = await response.json();

    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
}

export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
}
