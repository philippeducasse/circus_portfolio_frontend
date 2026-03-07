export interface Review {
  name?: string;
  organisation?: string;
  message: string;
  message_en?: string;
  message_fr?: string;
  date: string;
  project_id?: number;
  id: number;
}

const reviews = ref<Review[]>([]);

export const useReviews = () => {
  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:8000");
      reviews.value = await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const submitReview = async (data: unknown): Promise<boolean> => {
    const response = await fetch("http://localhost:8000", {
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
