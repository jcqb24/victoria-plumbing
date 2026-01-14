import React, { useState, useEffect } from "react";
import "../../../tokens/tokens.css";
import "./APIListingPage.css";
import { VPFilterSidebar } from "../../organisms/FilterSidebar/FilterSidebar";
import { VPProductGrid } from "../../organisms/ProductGrid/ProductGrid";
import { VPResultsHeader } from "../../molecules/ResultsHeader/ResultsHeader";
import {
  fetchProducts,
  transformProduct,
  SortOption,
} from "../../../utils/api";
import { ProductCardProps } from "../../molecules/ProductCard/ProductCard";

export type APIListingPageProps = {
  query?: string;
  pageSize?: number;
  className?: string;
};

export const VPAPIListingPage = ({
  query = "toilets",
  pageSize = 15,
  className = "",
}: APIListingPageProps) => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const [sortValue, setSortValue] = useState<SortOption>(1);
  const [filters, setFilters] = useState<any>({});

  useEffect(() => {
    loadProducts();
  }, [sortValue, filters, query]);

  const loadProducts = async () => {
    setLoading(true);
    setError(undefined);

    try {
      const response = await fetchProducts({
        query,
        size: pageSize,
        sort: sortValue,
        facets: buildFacets(filters),
      });

      const transformedProducts = response.products.map(transformProduct);
      setProducts(transformedProducts);
      setTotalResults(response.pagination.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const buildFacets = (filters: any) => {
    // Build facets from filters
    // This is a simplified version - you'd need to map your filter state to the API format
    return undefined;
  };

  const handleSortChange = (value: string | number) => {
    setSortValue(Number(value) as SortOption);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
  };

  const handlePriceChange = (min: number, max: number) => {
    setFilters({ ...filters, price: { min, max } });
  };

  if (loading) {
    return (
      <div className={`vp-api-listing-page ${className}`}>
        <div className="vp-api-listing-page__loading">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`vp-api-listing-page ${className}`}>
        <div className="vp-api-listing-page__error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className={`vp-api-listing-page ${className}`}>
      <aside className="vp-api-listing-page__sidebar">
        <VPFilterSidebar
          onFilterChange={handleFilterChange}
          onPriceChange={handlePriceChange}
        />
      </aside>
      <main className="vp-api-listing-page__content">
        <VPResultsHeader
          resultCount={totalResults}
          sortValue={sortValue}
          onSortChange={handleSortChange}
        />
        <VPProductGrid items={products} />
      </main>
    </div>
  );
};

VPAPIListingPage.displayName = "VPAPIListingPage";

export default VPAPIListingPage;
