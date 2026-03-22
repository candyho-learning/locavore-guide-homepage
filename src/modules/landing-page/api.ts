import { BrandsDirectory } from "@/types/brands";

export type FetchBrandsResponse = {
  brands: BrandsDirectory;
};

export type SubmitRequestFormPayload = {
  name: string;
  email: string;
  brand: string;
  location: string;
  catalog: File;
  message: string;
};

export type SubmitRequestFormResponse = {
  success: boolean;
  message: string;
};

// GET /api/brands
export async function fetchBrands(): Promise<FetchBrandsResponse> {
  const res = await fetch("/api/brands");
  if (!res.ok) throw new Error("Failed to fetch brands");
  return res.json();
}

// POST /api/submit-request
export async function submitRequestForm(
  payload: SubmitRequestFormPayload,
): Promise<SubmitRequestFormResponse> {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("email", payload.email);
  formData.append("brand", payload.brand);
  formData.append("location", payload.location);
  formData.append("catalog", payload.catalog);
  formData.append("message", payload.message);

  const res = await fetch("/api/submit-request", {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("Failed to submit request");
  return res.json();
}
