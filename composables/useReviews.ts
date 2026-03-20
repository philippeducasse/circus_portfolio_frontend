export interface Review {
  name?: string;
  organisation?: string;
  message: string;
  message_en?: string;
  message_fr?: string;
  message_de?: string;
  date: string;
  project_id?: number;
  id: number;
  original_message_language?: string;
}
const reviews = ref<Review[]>([]);

export const useReviews = () => {
  const config = useRuntimeConfig();

  const fetchReviews = async () => {
    console.log("URL: ", config.public.apiUrl);
    try {
      const response = await fetch(`${config.public.apiUrl}/reviews`);
      reviews.value = await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const submitReview = async (data: unknown): Promise<boolean> => {
    const response = await fetch(`${config.public.apiUrl}/reviews`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      await fetchReviews();
    }

    return response.ok;
  };

  return { reviews, fetchReviews, submitReview };
};
