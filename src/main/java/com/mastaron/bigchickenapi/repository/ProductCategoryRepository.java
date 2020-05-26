package com.mastaron.bigchickenapi.repository;

import com.mastaron.bigchickenapi.model.ProductCategory;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProductCategoryRepository extends PagingAndSortingRepository<ProductCategory, Long> {
    ProductCategory findByName(String name);
}
