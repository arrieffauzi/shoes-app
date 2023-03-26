type Shoes =  {
  box_condition: string;
  brand_name: string;
  category: string[];
  collection_slugs: string[];
  color: string;
  designer: string;
  details: string;
  gender: string[];
  grid_picture_url: string;
  has_picture: boolean;
  has_stock: boolean;
  id: number;
  keywords: any[];
  main_picture_url: string;
  midsole: string | null;
  name: string;
  nickname: string;
  original_picture_url: string;
  product_template_id: number;
  release_date: Date | string;
  release_date_unix: number;
  release_year: number | null;
  retail_price_cents: number;
  shoe_condition: string;
  silhouette: string;
  size_range: number[];
  sku: string;
  slug: string;
  status: string;
  story_html: string | null;
  upper_material: string | null;
  size?: number | null;
}

type initArray = any[];
