const BASE_URL = "https://baconipsum.com/api/";

export const fetchRandomText = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}?type=all-meat&sentences=3&format=text`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch text");
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Error fetching text:", error);
    throw error;
  }
};
